// This module exports a function that returns a random answer from the provided array of answers.

/**
 * Selects a random answer from the provided array of answers.
 * @param {Array} answers - The array of possible answers.
 * @returns {Object} A random answer object containing a message and a color.
 */
function getRandomAnswer(answers) {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

export default getRandomAnswer;
