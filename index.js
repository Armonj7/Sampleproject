// This is my first JavaScript code!
let name = 'Armon';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Armon';
let lastName = 'Jackson';

const interestRate = .3;
interestRate = 1;
console.log(interestRate);

let name = 'Armon'; // String literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

let name = 'Armon';
let age = 30;
let person = {
    name: 'Armon',
    age: 30
};

// Dot Notation
person.name = 'John'

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + '' + lastName)
}

// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));