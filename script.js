// Select DOM elements
const submitBtn = document.querySelector(".submitBtn"); // Button to submit the guess
const userInput = document.querySelector(".userInput"); // Input field for the user's guess
const message = document.querySelector(".message"); // Message display element
const attemptsDisplay = document.querySelector(".attemptsDisplay"); // Element to display the number of attempts

// Initialize variables
let attempts = 0; // Tracks the number of attempts made
const maxAttempts = 6; // Maximum allowed attempts
let randomNumber = generateRandomNumber(); // Generate the random number to be guessed

/**
 * Event listener for the Submit button.
 * This handles the user's guess, validates input, and provides feedback.
 */
submitBtn.addEventListener("click", () => {
    const guess = Number(userInput.value); // Convert user input to a number

    // Check if the input is a valid number between 1 and 100
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        message.style.color = "orange";
        return;
    }

    attempts++; // Increment the attempt counter
    attemptsDisplay.textContent = `Attempts: ${attempts}`; // Update the attempts display

    // Check if the guess is correct
    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number correctly. The number was ${randomNumber}.`;
        message.style.color = "green";
        resetGame(); // Reset the game after a win
    } 
    // Check if the maximum number of attempts is reached
    else if (attempts >= maxAttempts) {
        message.textContent = `Game Over! You have reached the maximum number of attempts. The correct number was ${randomNumber}.`;
        message.style.color = "red";
        resetGame(); // Reset the game after losing
    } 
    // Provide hints if the guess is incorrect
    else if (guess < randomNumber) {
        message.textContent = "Too Low! Try again.";
        message.style.color = "red";
    } else if (guess > randomNumber) {
        message.textContent = "Too High! Try again.";
        message.style.color = "red";
    }

    // Clear and focus the input field for the next guess
    userInput.value = "";
    userInput.focus();

    console.log(`User guessed: ${guess}`); // Log the user's guess (for debugging)
});

/**
 * Generates a random number between 1 and 100.
 * @returns {number} Random number between 1 and 100
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

/**
 * Resets the game after a win or loss.
 * Resets attempts, generates a new random number, and clears the message display.
 */
function resetGame() {
    setTimeout(() => {
        randomNumber = generateRandomNumber(); // Generate a new random number
        attempts = 0; // Reset the attempt counter
        attemptsDisplay.textContent = `Attempts: ${attempts}`; // Reset the attempts display
        message.textContent = ""; // Clear the message display
    }, 3000); // Delay the reset for 3 seconds
}
