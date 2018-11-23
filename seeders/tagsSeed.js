// fakeDatas is used to create seeds see doc here => http://marak.github.io/faker.js/
const fakeDatas = require('faker');
const models = require('../models');
const User = models.User;
const Profile = models.Profile;
const Actuality = models.Actuality;
const Tag = models.Tag;
const ActualitiesTag = models.ActualitiesTag;

module.exports = {
  createTags: (tagsNumber, actualityIds) => {
    let counter = 0;
    while(counter <= tagsNumber){
      Tag.create({title: fakeDatas.lorem.word()})
      .then((newTag) => {
        Actuality.findAll({where: {id: actualityIds}})
        .then((actualities) => {
          console.log("ndjsndjsfdsfs", actualities)
          newTag.setActualities(actualities)
        })
        .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))

      counter ++;
    }
  }
}