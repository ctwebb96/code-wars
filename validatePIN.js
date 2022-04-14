//day 9 regex solution
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}