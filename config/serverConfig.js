const config = require('./config');
let dbConfig = {
    host    : config.host,
    user    : config.database_username,
    password: config.password,
    database: config.database,
    ssl  : {
      // DO NOT DO THIS
      // set up your ca correctly to trust the connection
      rejectUnauthorized: false
    }
  };
  
  module.exports = dbConfig;
