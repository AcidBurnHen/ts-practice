// Function return types

// In most cases TS infers the return type of a function based on the values we give to return
function add(n1: number, n2: number) {
    return n1 + n2;
}

// I can explicitly specify the type after the function parentheses with a colon like "(): type"
function add2(n1: number, n2: number): number {
    return n1 + n2;
}

// If I do not have a good enough reason to explicitly set the type, I should let TS infer it. 

// When I have a function like print that doesn't return anything I can use the void type.
function print(n: number): void {
    console.log('Result: ' + n)
}

print(add(8, 10));