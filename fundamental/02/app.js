
// Variables - var, let, const

var username = 'Jonh Doe';
console.log(username);

username = 'Steve Smith';
console.log(username);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// Let
let firstName = 'John Doe';
console.log(firstName);

// const
const lastName = 'Doe';
console.log(lastName);
// can not reassign
// lastName = 'Sara';

const person = {
    name: 'Sara',
    age: 32
};

console.log(person);
console.log(person.name);

person.name = 'Veli';

console.log(person.name);

const number = [1, 2, 3, 4];
number.push(5);
console.log(number);