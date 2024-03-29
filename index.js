import inquirer from "inquirer";
// computer will generate a random number - DONE
// user input for guessing number - DONE
// compare computer generated number with user input and show result - DONE
const randomNumber = Math.floor(Math.random() * 8 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-8:",
    },
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you have guessed right number");
}
else {
    console.log("sorry you guessed wrong number.");
}
