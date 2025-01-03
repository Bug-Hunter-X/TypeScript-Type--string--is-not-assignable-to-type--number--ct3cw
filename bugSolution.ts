function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
let result2 = subtract(10, 5); // result2 is 5

// Solution: Type conversion or input validation
let num1: number = parseInt("5");
let num2: number = parseFloat("3.14");

let result3 = add(5, num1); //Correct
let result4 = subtract(10, num2); //Correct