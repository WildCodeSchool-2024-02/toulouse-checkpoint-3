const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { edit } = require("../../../controllers/boatActions");
const tileExists = require("../../../services/tileExists");

router.put("/:id", tileExists, edit);

/* ************************************************************************* */

module.exports = router;
