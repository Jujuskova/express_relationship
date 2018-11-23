const {createProfilesWithUser} = require('./profileUserSeed');
const {createActualities, getActualityAuthor, getActualitiesByAuthorId, addTagsToActuality} = require('./actualitiesSeed');
const {createTags} = require('./tagsSeed');

// createProfilesWithUser(100); // Change the num to select numbers of profiles/users creation
// createActualities(10, 6); // firstArgument is numbers of actualities will create, secondArgument is id of author
// getActualityAuthor(1); // Get an author (user) by actuality id
// getActualitiesByAuthorId(8); // Pass an authorId and get it actualities
// createTags(40, [1, 2, 3]); // Create 4 new Tags and links all with Actuality 1, 2 and 3 (id)