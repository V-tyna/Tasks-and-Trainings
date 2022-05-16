const findObjectProperty = (prop, obj) => {
	if(obj[prop]) {
  	return 'Property is present in the object';
  }
  
  return 'Property is not present in the object';
}

module.exports = findObjectProperty;