'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActualitiesTag = sequelize.define('ActualitiesTag', {
    actualityId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  ActualitiesTag.associate = function(models) {
    // associations can be defined here
  };
  return ActualitiesTag;
};