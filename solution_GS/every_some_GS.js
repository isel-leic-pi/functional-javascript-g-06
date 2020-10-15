function checkUsersValid(goodUsers) {
    return function allUserValid(submittedUsers) {
        return submittedUsers.every(submittedUser => 
            goodUsers.some(goodUser => 
                goodUser.id === submittedUser.id));
    };
}

module.exports = checkUsersValid;