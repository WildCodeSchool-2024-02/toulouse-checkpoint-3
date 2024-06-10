const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  try {
    const { coord_x: coordX, coord_y: coordY } = req.body;

    const tile = await tables.tile.readByCoordinates(coordX, coordY);
    if (tile.length) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = tileExists;
