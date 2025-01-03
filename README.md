# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error:  Type 'string' is not assignable to type 'number'. This occurs when performing arithmetic operations with a mix of number and string types. TypeScript's type system catches this to maintain type safety.  The solution involves ensuring all operands are numbers before calculations.

## How to reproduce

1. Clone the repository
2. Run `tsc bug.ts` to see the compilation error
3. Examine `bug.ts` and `bugSolution.ts` to understand the issue and the solution.

## Solution

The solution involves type conversion or input validation to ensure all operands are numbers before performing arithmetic operations.