// We don't have to declare the object type as TS will infer it from the variable 

// Enums are custom to TS, and they help us define a set of named constants.
enum Role1 {ADMIN, READ_ONLY, AUTHOR }
// If we don't want the enum to start at 0 we can assign it a number,
enum Role2 {ADMIN = 5, READ_ONLY, AUTHOR }
// we can also define an Enum value as a string, but when we do that
// then the other values also have to be initialized 
enum Role3 {ADMIN = 5, READ_ONLY = "readonly", AUTHOR = 6}
// Best practice would be to create a string or number enum, not mixed ones.
enum Role4 {ADMIN = "admin", READ_ONLY = "readonly", AUTHOR = "author"}

let car: any 
// This type is the most flexible type in TS, it doesn't tell TS anything,
// and we can store anything inside of an any type. 
// We want to avoid using the any type because it basically removes
// the type checking that we want from using TS. It's like using vanilla JS.
// We use any only in rare cases when we don't know what value we are expecting.

const person: {
    name: string;
    age: number;
    hobbies: string[];
    tupleRole: [number, string] // This creates a tuple type in TS
    role: Role4
} = {
    name: "Marin",
    age: 25,
    // TS infers this array as a type string[] 
    hobbies: ['Anime', 'Gaming'],
    /* TS infers this as a union type, but we want to use a tuple, because 
    this should be a fixed lenght array with specific types */
    tupleRole: [2, "author"],
    role: Role4.ADMIN
}

// person.role.push('admin'); won't throw an error because tuples support push method
// person.role[1] = 10; will throw an error when we use a tuple

/* Tells TS that we plan to store an array of strings inside of this variable, if 
we want to use different types inside of the array we can use the type any[] */
let favActivities: string[];
favActivities = ['Reading manga', "Playing around with code"]

console.log(person)

// TS infers that hobby is a string because it is looped from an array of strings. 
for (const hobby of person.hobbies) {
    // We can only use string methods on type of string (obviously :D)
    console.log(hobby.toLowerCase())
    // console.log(hobby.map()) Throws an error because hobby is not of type array, it is a string
}