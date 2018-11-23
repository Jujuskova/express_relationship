'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actuality = sequelize.define('Actuality', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Actuality.associate = function(models) {
    // associations can be defined here
  };
  return Actuality;
};