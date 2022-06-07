const findProgrammer = (input) => {
    return input.length > 0 ? [(input.find(p => p.job === 'programmer').name)] : input;
}

module.exports = findProgrammer;