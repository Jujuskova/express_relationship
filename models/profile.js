'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  };
  return Profile;
};