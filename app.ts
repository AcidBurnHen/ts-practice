function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    /* Do the math before adding it onto the string */
    const result = n1 + n2

    if (showResult) {
    /* Adding string before numbers n1 + n2 converts everything into a string so the math does not work */
       console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}

/* Typescript infers types to variables so we do not have to add them except special cases like 
using let without assigning a value where we can add an explicit type */
let number1: number;
number1 = 5;
var number2 = 3.2;
let printResult = true
var resultPhrase = "Result is: "

add(number1, number2, printResult, resultPhrase)
