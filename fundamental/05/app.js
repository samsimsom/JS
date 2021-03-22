
const id = 100;


// Equal to
if (id == 101) {
    console.log('Corrent');
} else {
    console.log('Incorrect');
}

// Equal to value & type
if (id === 100) {
    console.log('Corrent');
} else {
    console.log('Incorrenct');
}

// Not Equal to
if (id != 100) {
    console.log('Corrent');
} else {
    console.log('Incorrenct');
}

// Not Equal to value & type
if (id !== 100) {
    console.log('Corrent');
} else {
    console.log('Incorrenct');
}

const userName = 'John';

if (typeof userName !== 'undefined') {
    console.log(`The username ${userName}`);
} else {
    console.log('No userName');
}


const color = 'red';

if (color === 'red') {
    console.log('Color is red');
} else if (color === 'blue') {
    console.log('Color is blue');
} else if (color == 'red') {
    console.log('Color also is red');
} else {
    console.log('Color is not red or blue');
}

// Logical operators

const nam = 'Steve'
const age = 20

if (age > 0 && age < 12) {                      // AND
    console.log(`${name} is a childe`)
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

if (age < 16 || age > 67) {                      // OR
    console.log(`${name} NOPE!`)
} else {
    console.log(`${name} is in the race`)
}


// ternary operator

let result = id === 100 ? 'Corrent' : 'Incorecet';
console.log(result)



// switch

let number = 10;

switch (number) {
    case 10:
        console.log(number)
        break;
    case 9:
        console.log(number)
        break;
    default:
        console.log('You loose!')
        break;
}