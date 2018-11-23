'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};