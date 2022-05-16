const splitString = (str) => {
	if(str === undefined) {
  	throw new Error('Invalid argument');
  }
  
  return str.split('');
}

console.log(splitString('ABC'));

module.exports = splitString;