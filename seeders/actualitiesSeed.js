// fakeDatas is used to create seeds see doc here => http://marak.github.io/faker.js/
const fakeDatas = require('faker');
const models = require('../models');
const User = models.User;
const Actuality = models.Actuality;

module.exports = {
  createActualities: (numberActu, userId) => {
    let counter = 0;
    while(counter <= numberActu){
      createActuality(userId);
      counter ++;
    }
  },
  getActualityAuthor: (actualityId) => {
    Actuality.findByPk(actualityId, {
      include: 'author'
    })
    .then((actuality) => console.log(actuality.get().author.get()))
    .catch((err) => console.log(err))
  },
  getActualitiesByAuthorId: (authorId) => {
    User.findByPk(authorId, {
      include: [ 'actualities' ]
    })
    .then((author) => console.log(author.get()))
    .catch((err) => console.log(err))
  },
  addTagsToActuality: (actualityId, tags) => {
    Actuality.findByPk(actualityId)
    .then((actuality) => {
      actuality.setTags(tags)
      .then((actuality) => console.log(actuality))
    })
    .catch((err) => console.log(err))
  }
}

const createActuality = (userId) => {
  User.findByPk(userId)
  .then((user) => {
    Actuality.create({
      title: fakeDatas.lorem.sentence(),
      content: fakeDatas.lorem.paragraph(),
    })
    .then((newActuality) => {
      newActuality.setAuthor(user)
      console.log(newActuality.get())
    })
  })
  .catch((err) => console.log(err))
}