// We don't have to declare the object type as TS will infer it from the variable 
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string] // This creates a tuple type in TS
} = {
    name: "Marin",
    age: 25,
    // TS infers this array as a type string[] 
    hobbies: ['Anime', 'Gaming'],
    /* TS infers this as a union type, but we want to use a tuple, because 
    this should be a fixed lenght array with specific types */
    role: [2, "author"]
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