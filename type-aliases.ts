// Type Aliases

// When there's a lot of repetition of types being used in our code such as the
// union type used down in the code, we can use type aliases. However, type aliases
// don't create a new type, they simply give us the option to make a new name to refer to that type. 

type Input = number | string
type Result = "number" | "string"

function combine(input1: Input, input2: Input, convertResult: Result) {
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
  

  