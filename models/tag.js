'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Actuality, {through: 'ActualitiesTags', foreignKey: 'tagId', as: 'actualities'})
  };
  return Tag;
};