/* We don't have to declare the object type as TS will infer it from the variable */

const person: {
    name: string;
    age: number;
} = {
    name: "Marin",
    age: 25
}

console.log(person)