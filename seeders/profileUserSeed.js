// fakeDatas is used to create seeds see doc here => http://marak.github.io/faker.js/
const fakeDatas = require('faker');
const models = require('../models');
const Profile = models.Profile;

module.exports = {
  createProfilesWithUser: (userNumber) => {
    let counter = 0;
    while(counter <= userNumber){
      Profile.create({
        firstname: fakeDatas.name.findName(),
        lastname: fakeDatas.name.lastName(),
        aboutMe: fakeDatas.lorem.sentence(),
        user: {
          email: fakeDatas.internet.email(),
          password: fakeDatas.internet.password(),
        }
      }, {
      include: 'user'
    })
    .then((newProfile) => {
      console.log("A new profile has been created :", newProfile)
      newProfile.getUser()
      .then((user) => console.log("And the new user linked to profile :", user.get()))
      .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))

    counter ++;
    }
  }
}