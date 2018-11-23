'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actuality = sequelize.define('Actuality', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Actuality.associate = function(models) {
    Actuality.belongsTo(models.User, {foreignKey: 'userId', as: 'author'})
    Actuality.belongsToMany(models.Tag, {through: 'ActualitiesTags', foreignKey: 'actualityId', as: 'tags'})
  };
  return Actuality;
};