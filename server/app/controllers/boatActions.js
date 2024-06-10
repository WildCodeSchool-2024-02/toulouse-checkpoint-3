const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const boat = {
      id: req.params.id,
      coord_x: req.body.coord_x,
      coord_y: req.body.coord_y,
    };
    const result = await tables.boat.update(boat);
    res.sendStatus(204);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
