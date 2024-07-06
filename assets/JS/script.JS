// Create a function that stores user input to local storage and redirects user to personal page.
// function= "SignUp()" {

// addEventListener

const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;



const userInput = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email
};

const userInputJSON = JSON.stringify(userInput);
localStorage.setItem('userInput', userInputJSON);

// }

// if user does not correctly enter inputs, they will recieve an error message directing them to correctly enter sign up info
// Create a function for collecting user About me information and then appending it to the page
// Create a light/dark mode toggle based on user preference

 