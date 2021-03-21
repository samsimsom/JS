

// Primitive

let userName = 'JohnDoe';
console.log(`${userName}, is ${typeof userName}`);

let age = 35;
console.log(`${age} is a ${typeof age}`);

let hasKids = false;
console.log(`${age} is a ${typeof hasKids}`);

let car = null;
console.log(`${car} is an ${typeof car} it's not true`);

let test;
console.log(`${test}, is a ${typeof test}`);


// Referance Types - Objects
// Array

let hobbies = ['music', 'movies', 'books'];
console.log(`${hobbies} is an ${typeof hobbies}`)

let address = {
    city: 'Ankara',
    state: 'Dikmen'
};
console.log(address.city, address.state);
console.log(`${address}, is an ${typeof address}`);

let today = new Date();
console.log(`${today} is an ${typeof today}`)