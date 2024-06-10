const tables = require("../../database/tables");

const browse = async (_, res, next) => {
  try {
    const tiles = await tables.tile.readAll();
    res.json(tiles);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse };
