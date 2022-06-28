// Literal types

// Literal types can be used when we have exact values that we need to pass
// We can combine them with a union type.
// With literal types only the exact types described 
// will be allowed as the value when we call the function.

function combine(input1: number | string, input2: number | string, convertResult: "number" | "string") {
  let result;

  if (convertResult === "number") { return +result; }

  if (convertResult === "string") { return result.toString() }

  if (typeof input1 === 'number' && typeof input2 === 'number') { result = input1 + input2; }

  if (typeof input1 === 'string' && typeof input2 === 'string') { result = input1 + input2; }

  return result;
}

const combineYear = combine("20", "22", 'number');
const combineNum = combine(1, 2, 'string')
console.log(combineYear, combineNum)

// end