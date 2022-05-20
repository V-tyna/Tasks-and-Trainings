const login = (req, funcCheck) => {
        if(req === undefined || funcCheck === undefined) {
        throw new Error('Empty parametrs');
    }
    const {email, password} = req.body;
	return funcCheck(email, password); 
}

const checkLogin = (email, password) => {
  if(email && password) {
    return true;
  } 
  return false;
}

module.exports = {
    login,
    checkLogin,
};