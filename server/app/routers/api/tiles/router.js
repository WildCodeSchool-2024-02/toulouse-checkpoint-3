const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { add, browse } = require("../../../controllers/tileActions");

router.post("/", add);
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
