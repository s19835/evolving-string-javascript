// set up require variables
const target = "HELLO WORLD";
const mutationRate = 0.01;
const populationSize = 100;
const generations = 1000;

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

// main for loop
for (let gen = 0; gen < generations; gen++) {
    // calculate fitness for each individual
    let fitnessScores = population.map(individual => calculateFitness(individual));

    // create new poputlation by selection and crossover
    let newPopulation = [];
    for (let i = 0; i < populationSize; i++) {
        // Selection: Chose two parents based on fitness
        let parentA = population
    }
}

// Select an individual based on fitness probability
function select(fitnessScores) {
    let totalFitness = fitnessScores.reduce((sum, score) => sum + score, 0);
    let threshold = Math.random() * totalFitness;
    let runningSum = 0;

    for (let i = 0; i < fitnessScores.length; i++) {
        runningSum += fitnessScores[i];

        if (runningSum > threshold) {
            return i;
        }
    }
}

// Crossover two parents
function crossover(parentA, parentB) {
    let midpoint = Math.floor(Math.random() * parentA.length);
    return parentA.slice(0, midpoint) + parentB.slice(midpoint);
}

// Mutate an individual
function mutate(individual) {
    let newIndividual = '';

    for (let i = 0; i < individual.length; i++) {
        if (Math.random() < mutationRate) {
            newIndividual += randomChar();
        } else {
            newIndividual += individual[i];
        }
    }

    return newIndividual;
}