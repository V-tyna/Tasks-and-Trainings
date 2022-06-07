const findYoungestAndCountTotalSalary = (people) => {
    const totalSalary = people.reduce((acc, s) => acc += s.salary , 0);
    const youngest = people.map(p => p.age).sort()[0] || Infinity;
    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

module.exports = findYoungestAndCountTotalSalary;