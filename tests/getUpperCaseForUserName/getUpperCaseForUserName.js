const getUpperCaseForUserName = (name) => {
    if (name === 'Bob') {
      throw new Error('The user\'s name is Bob');
    }
  
      return name.toUpperCase();
  }

  module.exports = getUpperCaseForUserName;