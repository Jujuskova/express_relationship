// fakeDatas is used to create seeds see doc here => http://marak.github.io/faker.js/
const fakeDatas = require('faker');
const models = require('../models');
const User = models.User;
const Profile = models.Profile;
const Actuality = models.Actuality;
const Tag = models.Tag;
const ActualitiesTag = models.ActualitiesTag;

const createProfilesWithUser = require('./profileUserSeed').createProfilesWithUser

createProfilesWithUser(10) // Change the num to select numbers of profiles/users creation



