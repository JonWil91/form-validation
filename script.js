const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {
    let messages = []

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
    }

    // Variable regular expression searching for lowercase letters
    const lowerCaseLetters = /[a-z]/g;

    if (!password.value.match(lowerCaseLetters)) {
        messages.push('Password needs to contain at least one lowercase letter')
    }

    // Variable regular expression searching for uppercase letters
    const upperCaseLetters = /[A-Z]/g;

    if (!password.value.match(upperCaseLetters)) {
        messages.push('Password needs to contain at least one uppercase letter')
    }

    // Variable regular expression searching for numbers
    const numbers = /[0-9]/g;

    if (!password.value.match(numbers)) {
        messages.push('Password needs to contain at least one number')
    }

    // Variable regular expression searching for special characters
    const specialCharacters = /[!@#$%^&*]/g;

    if (!password.value.match(specialCharacters)) {
        messages.push('Password needs to contain at least one special character')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    // If there is any error message, the form will not be submitted
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('\n')
    }
})