const tables = require("../../database/tables");

const browse = async (_, res, next) => {
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
    const result = await tables.boat.update({
      coord_x: req.body.coord_x,
      coord_y: req.body.coord_y,
      id: req.params.id,
    });
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send("Bateau non trouvé");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
