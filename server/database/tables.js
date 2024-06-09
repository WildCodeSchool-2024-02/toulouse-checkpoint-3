// Import the repository modules responsible for handling data operations on the tables
const BoatRepository = require("./models/BoatRepository");
const TileRepository = require("./models/TileRepository");

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

const tables = {
  boat: new BoatRepository(),
  tile: new TileRepository(),
};

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
