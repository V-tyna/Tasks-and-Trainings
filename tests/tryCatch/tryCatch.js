const login = (req, check, error) => {
    try {
        const { email, password } = req.body;

        return check(email, password);
    } catch (e) {
        error(e);
    }
};

const checkLogin = (email, password) => {
    if (email && password) {
        return true;
    }
    return false;
};

const showError = (err) => {
    throw new Error(`Sorry, you have an ${err}`);
};

module.exports = {
    login,
    checkLogin,
    showError
};
