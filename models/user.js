'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};