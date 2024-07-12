

function SignUp() {
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const ageRange = document.getElementById('ageRange').value;
const sunSign = document.getElementById('sunSign').value;
const pronouns = document.getElementById('pronouns').value;

if (!firstName || !lastName || !username || !email || !password || !ageRange || !sunSign || !pronouns) {
        alert("Please fill out all required fields.");
        return;
    }

const user = {
    firstName,
    lastName,
    username,
    email,
    ageRange,
    sunSign,
    pronouns
};

let users = JSON.parse(localStorage.getItem('users')) || [];

users.push(user);

localStorage.setItem('users', JSON.stringify(users));

const signupMessage = document.getElementById('signupMessage');
signupMessage.innerHTML = "<div class='alert alert-success'>Account successfully created!</div>";

    setTimeout(() => {
    window.location.href = 'profilet-test.html';
    }, 2000); // 2-second delay
}

function SignIn() {
    
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;

if (!username || !password) {
        alert("Please fill out both fields.");
        return;
    }

    alert(`Username: ${username}\nPassword: ${password}`);

  const signinMessage = document.getElementById('signinMessage');
  signinMessage.innerHTML = "<div class='alert alert-success'>Sign-in successful!</div>";

    setTimeout(() => {
    window.location.href = 'profilet-test.html';
    }, 2000); // 2-second delay

  }


// Collects the form data when the "Create Account" button is clicked.
// Creates a user object containing the collected data.
// Retrieves the existing user data from local storage (or initializes an empty array if no data exists).
// Adds the new user to the array of users.
// Saves the updated user data back to local storage.
// Redirects to the second HTML page after the account is created.
