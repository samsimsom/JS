

let value;

// number to string
value = String(42);
value = String(23 + 23);
value = String(true);
value = String(new Date());
value = String([1, 2, 3, 4])

// toString()
value = (5).toString();
value = (true).toString();


// string to number;
value = Number('42');
value = Number(true);
value = Number(false);
value = Number(true);
value = Number('Hello');        // Nan -> not a number


value = parseInt('100.30');     // 100
value = parseFloat('122.32')    // 122.32


// output
console.log(value);
console.log(typeof value);
console.log(value.length);       // string property
console.log(value.toFixed())    // number property


let val1 = String(5);
let val2 = 6;
let sum = val1 + val2;          // 56

console.log(sum);
console.log(typeof sum);