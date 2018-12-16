const Sequelize = require('sequelize');

// plug in the promise library:
Sequelize.Promise = global.Promise;

const db = new Sequelize('contacts', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  returning: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

module.exports = db;