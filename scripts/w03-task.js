/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    let sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').textContent = sum;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

    let difference = subtract(subtract1, subtract2);
    document.querySelector('#difference').textContent = difference;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    let product = multiply(factor1, factor2);
    document.querySelector('#product').textContent = product;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    let quotient = divide(divideNumber1, divideNumber2)
    document.querySelector('#quotient').textContent = quotient;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();

let currentYear = currentDate.getFullYear();

document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//control array
document.getElementById('array').textContent = numbersArray.join(', ');

//odds
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.join(', ');

//evens
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

//reduce() and sumOfArray
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0); 
document.getElementById('sumOfArray').textContent = sumOfArray; 

//map()
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

/* Output Source Array */
console.log("Control/Source Array:", numbersArray);

/* Output Odds Only Array */
console.log("Odds Array:", oddNumbers.join(', '));

/* Output Evens Only Array */
console.log("Evens Only Array:", evenNumbers.join(', '));

/* Output Sum of Org. Array */
console.log("Sum Array:", sumOfArray);

/* Output Multiplied by 2 Array */
console.log("Multiplied by 2 Array:", multipliedArray.join(', '));

/* Output Sum of Multiplied by 2 Array */
const sumOfMultipliedBy2Array = multipliedArray.reduce((sum, number) => sum + number, 0);
console.log("Sum of Multiplied by 2 Array:", sumOfMultipliedBy2Array);