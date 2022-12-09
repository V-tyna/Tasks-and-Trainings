const Sequelize = require('sequelize');
const { DB_SCHEMA_NAME, DB_USER_NAME } = require('../configs/keys');
const { DB_PASSWORD } = require('../configs/secure_keys');

const sequelize = new Sequelize(DB_SCHEMA_NAME, DB_USER_NAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
