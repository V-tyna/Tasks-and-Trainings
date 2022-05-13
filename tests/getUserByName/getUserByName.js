const arrOfUsers = [{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}];
function getUserByName(name) {
   return arrOfUsers.find(user => user.name === name);
}

module.exports = getUserByName;