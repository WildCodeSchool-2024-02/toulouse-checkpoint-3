const tileExists = async (req, res, next) => {
  if (!req.body.coord_x || !req.body.coord_y) {
    await res.sendStatus(422);
  } else if (req.body.coord_x || req.body.coord_y) {
    await next();
  }
};

module.exports = tileExists;
