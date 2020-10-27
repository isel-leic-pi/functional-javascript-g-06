'use strict'

function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers
          .every(x => goodUsers
            .some(y => x.id === y.id)
          );
    }
  }

module.exports = checkUsersValid