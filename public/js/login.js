const loginFormHandler = async(event) => {
    event.preventDefault();

    // Collect values from the login form
    const user_name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (user_name && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ user_name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/mymatch');
        } else {
            alert(response.statusText);
        }
    }
};
const signupFormHandler = async(event) => {
    event.preventDefault();

    const user_name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const group_id = 9;

    function getSexValue() {
        var radio = document.getElementsByName('sex-signup');
        for (i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                return radio[i].value;
            }
        }
    }
    const sex = getSexValue();
    if (user_name && password && sex && age) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ user_name, age, sex, group_id, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/mymatch');
        } else {
            alert(response.statusText);
        }
    }
};


document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);