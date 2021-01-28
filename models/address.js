// const { sequelize } = require('../index');.
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://dzgiogdv:ldFN96AsZnyWKFXQpGJGt1Ob0J6ZYjEC@ziggy.db.elephantsql.com:5432/dzgiogdv');
const Address = sequelize.define('Addresses', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  address: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = {
  Address
}