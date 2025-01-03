function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
let result2 = subtract(10, 5); // result2 is 5

//Uncommon error: Type 'string' is not assignable to type 'number'
let result3 = add(5, "3"); //Error
let result4 = subtract(10, "5"); //Error