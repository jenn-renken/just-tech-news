// import the sequalize constructor from the library
const Sequalize = require('sequelize');
require('dotenv').config();

// create connection to database, pass in mysql information
const sequalize = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequalize;