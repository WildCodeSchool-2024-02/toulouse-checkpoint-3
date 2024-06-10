const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const boats = await tables.boat.readAll(req.query);
    res.json(boats);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const response = await tables.boat.update({
      coord_x: req.body.coord_x,
      coord_y: req.body.coord_y,
      id: req.params.id,
    });
    if (response) {
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  edit,
};
