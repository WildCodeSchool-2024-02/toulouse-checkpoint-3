const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure from ${this.table} JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y`
    );

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
