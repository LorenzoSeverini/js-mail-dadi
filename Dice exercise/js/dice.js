// js Dice exercise
// reload the page on click header link 
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

// // function to run when button is clicked
document.getElementById("rollDice").addEventListener("click", function() {

    // random number between 1 and 6 for each dice
    let userDice = Math.floor(Math.random() * 6) + 1;
    let computerDice = Math.floor(Math.random() * 6) + 1;

    // display the random number for each dice, user and computer
    document.getElementById("userDice").innerHTML = userDice;
    console.log("User dice is", userDice);

    document.getElementById("computerDice").innerHTML = computerDice;
    console.log("Computer dice is",computerDice);

    // compare the random numbers for each dice
    if (userDice > computerDice) {
        //winner if the user dice is greater than the computer dice
        document.getElementById("result").innerHTML = "You Win!<br> Congratulations! Pc is a loser!";
        console.log("User wins, pc is a loser!");
    } else if (userDice < computerDice) {
        // loser if the user dice is less than the computer dice
        document.getElementById("result").innerHTML = "You Lose!<br> Pc is a winner! Better luck next time!";
        console.log("User loses, pc is a winner!");
    } else {
        // tie if the random numbers are equal
        document.getElementById("result").innerHTML = "It's a Tie! Try again!<br> You can do it! it's just a pc! :)";
        console.log("It's a tie! Try again!");
    }

});
