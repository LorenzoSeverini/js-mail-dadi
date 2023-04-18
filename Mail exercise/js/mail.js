// js mail exercise
// reload the page on click header link 
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

// // function to run when button is clicked
document.getElementById("btn").addEventListener("click", function() {

    // get the email from the input
    let email = document.getElementById("email").value;
    console.log("The email is", email);

    // list of emails
    let emails = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com", "email6@gmail,com"];
    console.log("The list of emails is", emails);
    
    // creat  a loop to check if the email is in the list or not
    let found = false;
    for (let i = 0; i < emails.length; i++) {
        if (email == emails[i]) {
            found = true;
        } 
    }

    // print the result
    if (found) {
        console.log("Welcome to our website, yor email is in the list", email);
        alert("Welcome to our website");
    } else {
        console.log("Sorry, you are not allowed to enter our website, your email is not in the list", email);
        alert("Sorry, you are not allowed to enter our website");
    }

});