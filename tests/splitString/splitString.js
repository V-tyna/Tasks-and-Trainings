const splitString = (str) => {
	if(str === undefined) {
  	throw new Error('Invalid argument');
  }
  
  return str.split('');
}

module.exports = splitString;