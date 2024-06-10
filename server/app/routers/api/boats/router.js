const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { edit } = require("../../../controllers/boatActions");

router.put("/:id", edit);

/* ************************************************************************* */

module.exports = router;
