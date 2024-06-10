const tables = require('../../database/tables');

const tileExists = async (req, res, next) => {
    const { coord_x: coordX, coord_y: coordY } = req.body;

    const tiles = await tables.tile.readByCoordinates(coordX, coordY);

    if (tiles.length > 0) {
        next();
    } else {
        res.sendStatus(422);
    }
};

module.exports = tileExists;