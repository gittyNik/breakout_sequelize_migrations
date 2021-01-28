// const { sequelize } = require('../index');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://dzgiogdv:ldFN96AsZnyWKFXQpGJGt1Ob0J6ZYjEC@ziggy.db.elephantsql.com:5432/dzgiogdv');
const User = sequelize.define('Users', {
  // Model attributes are defined here
  id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    pno: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
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
  User
}