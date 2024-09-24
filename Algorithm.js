// set up require variables
const target = 'HELLO WORLD';
const populationSize = 100;

// generate random characters
function randomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTWXYZ ';
    return chars[Math.floor(Math.random() * chars.length)];
}

// generate random string for specified length
function randomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomChar();
    }

    return result;
}

// calculate fitness ( how close a string is to the target)
function calculateFitness(individual) {
    let score = 0;
    for (let i = 0; i < target.length; i++) {
        if (individual[i] === target[i]) {
            score++;
        }
    }

    return score / target.length;
}

// create an initial population
let population = [];
for (let i = 0; i < populationSize; i++) {
    population.push(randomString(target.length))
}