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

    let lowerCaseLetters = /[a-z]/g;

    if (!password.value.match(lowerCaseLetters)) {
        messages.push('Password needs to contain at least one lowercase letter')
    }

   

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    // If there is any error message, the form will not be submitted
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})