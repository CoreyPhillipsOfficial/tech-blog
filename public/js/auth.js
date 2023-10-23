const signupForm = document.querySelector('#signup-form')

function signupUser(e) {
    e.preventDefault();

    // Send a POST fetch request to our register route

    // Attach the form data (email & password) from our inputs to the body

    // Stringify the body object as JSON and console.log the server response
}

signupForm.addEventListener('submit', signupUser);