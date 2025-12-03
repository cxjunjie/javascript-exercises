const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = (people) => {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        // if currentAge is older than oldest, replace with current
        return oldestAge < currentAge ? currentPerson : oldest;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
