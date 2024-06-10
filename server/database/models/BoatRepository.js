const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select ${this.table}.*, tile.coord_x as tx, tile.coord_y as ty, tile.id as t_id, tile.type, tile.has_treasure from boat join tile on tile.coord_x = boat.coord_x and tile.coord_y = boat.coord_y`,
    );
    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id],
    );
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
