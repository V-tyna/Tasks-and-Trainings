const validateRange = (value) => {
    const neededZeroForBusinessReasons = 0;

    if(value === neededZeroForBusinessReasons || value) {
        return value < 50 || value > 100; 
    }
    if(!value) {
        return 'Invalid argument';
    }
}

module.exports = validateRange;

