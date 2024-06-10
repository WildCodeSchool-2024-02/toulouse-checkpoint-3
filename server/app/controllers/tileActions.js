const tables = require("../../database/tables");

const add = (req, res) => {
  res.sendStatus(404);
};
const browse = async (req, res, next) => {
  try {
    const boats = await tables.tile.readAll();

    res.json(boats);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, add };
