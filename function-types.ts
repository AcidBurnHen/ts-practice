// Function types

function add(n1: number, n2: number) {
    return n1 + n2;
}

// When I have a variable that I want to pass a function to, I can set the type of that variable to Function
const combine0: Function = add
// However, in some cases, when the variable isn't a constant but I want to
// use only a specific function, I can explicitly declare a function type 
let combine1: (a: number, b: number) => number = add

console.log(combine1(1, 2))