/****************************
 Configuration
 ****************************/
// For environment variables [will work with .env file]

require('dotenv').config()
let ENV_VARIABLES = process.env;

module.exports = {
    ...ENV_VARIABLES,
    development: {},
};