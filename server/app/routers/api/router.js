const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const boatsRouter = require("./boats/router");

router.use("/boats", boatsRouter);

router.use("/boats/:id", boatsRouter);

const tilesRouter = require("./tiles/router");

router.use("/tiles", tilesRouter);

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

/* ************************************************************************* */

module.exports = router;
