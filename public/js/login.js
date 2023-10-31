const signupForm = document.querySelector('#signup-form')

const signupUser = async function () {
    console.log(e.target.email);

    const userName = document.querySelector(`input[name='username']`)
    const password = document.querySelector(`input[name='password']`)

    // Send a POST fetch request to our register route
    const res = await fetch('/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            username: userName.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (res.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Something went wrong!')
    }


    // Attach the form data (email & password) from our inputs to the body

    // Stringify the body object as JSON and console.log the server response
}

signupForm.addEventListener('submit', signupUser);