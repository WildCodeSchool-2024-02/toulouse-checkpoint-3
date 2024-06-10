const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    let query = `select boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure, tile.coord_y, tile.coord_x from boat JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y`;

    if (where && where.name) {
      query += ` where boat.name = '${where.name}'`;
    }
    const [rows] = await this.database.query(query);

    return rows;
  }

  async update(boat) {
    const [rows] = await this.database.query(
      `update boat set coord_x=?, coord_y=? where id=?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
