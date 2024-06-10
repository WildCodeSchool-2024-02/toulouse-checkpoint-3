const tables = require("../../database/tables");

const tileExist = async (req, res, next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;
  const tiles = await tables.tile.readByCoordinates(coordX, coordY);
  if (!tiles.length > 0) {
    res.sendStatus(422);
  } else {
    next();
  }
};

module.exports = tileExist;
