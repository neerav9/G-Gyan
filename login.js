const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.querySelector('form').addEventListener('submit', function(event) {
	var email = document.querySelector('input[type="email"]').value;
	var password = document.querySelector('input[type="password"]').value;

	if (!email || !password) {
		alert('Please fill in all fields');
		event.preventDefault(); 
	}
});
document.addEventListener('DOMContentLoaded', () => {
    // Sign up event listener
    document.querySelector('.sign-up-container form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const regid = document.getElementById('regid').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const role = document.querySelector('input[name="role"]:checked').value;

        const userData = {
            name,
            regid,
            email,
            password,
            role
        };

        try {
            const response = await fetch('/save_user_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('User data saved successfully.');
                window.location.href = 'profile.html'; // Redirect to profile.html
            } else {
                console.error('Failed to save user data.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Sign in event listener
    document.querySelector('.sign-in-container form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const regid = document.getElementById('login-regid').value;
        const password = document.getElementById('login-pass').value;

        const loginData = {
            regid,
            password
        };

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const result = await response.json();
                if (result.status === 'success') {
                    console.log('Login successful.');
                    window.location.href = 'profile.html'; // Redirect to profile.html
                } else if (result.status === 'error') {
                    if (result.message === 'User not found') {
                        window.alert('No user exists');
                    } else if (result.message === 'Invalid password') {
                        window.alert('Password is wrong');
                    }
                }
            } else if (response.status === 401) {
                window.alert('Password is wrong');
            } else if (response.status === 404) {
                window.alert('No user exists');
            } else {
                console.error('Failed to log in.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});