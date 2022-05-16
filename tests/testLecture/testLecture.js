const validateRange = (value) => {

    if(value === undefined || typeof value !== 'number') {
        return 'Invalid argument'; 
    }
    return value < 50 || value > 100;
}

module.exports = validateRange;

