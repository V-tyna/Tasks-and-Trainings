function foundPerson(people) {
    return people.find(p => p === 'Don' || p === 'John' || p === 'Kent') || '';
}

module.exports = foundPerson;