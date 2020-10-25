'use strict'

function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return  submittedUsers.every(
			submittedUser =>goodUsers.some(
				goodUser=>goodUser.id == submittedUser.id)
		)
	}
}
module.exports = checkUsersValid
