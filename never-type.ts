// Never Type

// The never type is a newer type in TS that is used for values that will never return
// TS will infer void from the createError function, but I can actually use the never type
// and explictily tell TS that I do not expect any return values, this makes the code clearer. 
// In ts, a function that is void shouldn't return a value, but actually returns undefined.
// In case of an error function like this, it doesn't return anything, not even undefined
function createError(message: string): never {
    throw new Error(message);
}

createError('Insufficient permissions');

// A loop that never ends also never returns a value, but in reality we would avoid writing such code.
function crazyLoop(): never {
    while(true) {
        console.log("Working...")
    }
}

