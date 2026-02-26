const findTheOldest = function(arr) {
    const oldestPerson = arr.sort((a,b) => {
        if (a.yearOfDeath === undefined) {a.yearOfDeath = (new Date()).getFullYear()}
        if (b.yearOfDeath === undefined) {b.yearOfDeath = (new Date()).getFullYear()}
        const aAge = (a.yearOfDeath - a.yearOfBirth);
        const bAge = (b.yearOfDeath - b.yearOfBirth);
        return bAge - aAge;
        }
    )
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
