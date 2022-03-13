const signupFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const sex = getSexValue();

    function getSexValue() {
        var radio = document.getElementsByName("sex-signup");
        for (i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                return radio[i].value;
            }
        }
    }

    if (username && password && sex && age) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, sex, age }),
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
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);