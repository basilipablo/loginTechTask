function validateEmailLogIn(userName) {
    const userNameErrors = []
    if (!userName) userNameErrors.push('A User Name is required')
    if (userNameErrors.length > 0) return userNameErrors
}

function validatePasswordLogIn(pasword) {
    const passwordErrors = []
    if (!pasword) passwordErrors.push('A password is required')
    if (passwordErrors.length > 0) return passwordErrors
}

export function logInValidation(obj) {
    const errors = {}

    const userNameErrors = validateEmailLogIn(obj.userName)
    if (userNameErrors) errors.userName = userNameErrors

    const passwordErrors = validatePasswordLogIn(obj.password)
    if (passwordErrors) errors.password = passwordErrors

    return errors
}