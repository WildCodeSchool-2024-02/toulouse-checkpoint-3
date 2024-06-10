const tileExists = (req, res, next) => {
  const { coordX, coordY } = req.body;

  const isValidCoordinate = (coord) => coord >= 0 && coord <= 11;

  if (isValidCoordinate(coordX) && isValidCoordinate(coordY)) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
