'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActualitiesTag = sequelize.define('ActualitiesTag', {
    actualityId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  ActualitiesTag.associate = function(models) {
    ActualitiesTag.belongsTo(models.Actuality, {foreignKey: 'actualityId', as: 'actuality'})
    ActualitiesTag.belongsTo(models.Tag, {foreignKey: 'tagId', as: 'tag'})
  };
  return ActualitiesTag;
};