const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    let query = `
      SELECT 
        boat.id,
        boat.name,
        boat.coord_x,
        boat.coord_y,
        tile.type,
        tile.has_treasure,
        tile.coord_x,
        tile.coord_y
      FROM boat
      JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
    `;

    if (where && where.name) {
      query += ` WHERE boat.name = '${where.name}'`;
    }

    const [rows] = await this.database.query(query);
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query('update boat set coord_x=?, coord_y=? where id=?', [boat.coord_x, boat.coord_y, boat.id]);
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
