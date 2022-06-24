// Union types

// If we have a function that requires paramaters of different values we can use a union type
// we can use a union type by declaring a pipe symbol | between types
function combine(input1: number | string, input2: number | string) {
  /* When we first declare this function we get an error in this line of code:
    const result = input1 + input2;
 Error: "Operator '+' cannot be applied to types 'string | number'"
 This should work because number and string can use the + symbol.
 To workaround this issue we can use the typeof check
 */

  let result;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  }

  if (typeof input1 === 'string' && typeof input2 === 'string') {
    result = input1 + input2;
  }

  return result;
}

const combinedAge = combine(30, 26);
const combinedNames = combine('Hello', ' World');

console.log(combinedAge, combinedNames);
