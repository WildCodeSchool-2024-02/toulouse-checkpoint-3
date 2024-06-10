const tileExists = (req, res, next) => {
  const { coord_x: coordX, coord_y: coordY } = req.body;

  const isValidCoordinate = (coord) => coord >= 0 && coord <= 11;

  if (isValidCoordinate(coordX) && isValidCoordinate(coordY)) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
