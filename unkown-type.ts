// Unknown Type

// Unkown is similar to the Any type, but it is stricter than Any.
// While it may be better than Any type, it is still better to not use too often. 
// And instead whenever I know all the expected values use the union type.

let message: unknown;
let messages: string;

message = "Hello";
message = 10;
message = ["Hello", "How was your day"]

// When I use unkown this throws an error "Type 'unknown' is not assignable to type 'string'"
messages = message;
// However, the same error would go away if message was declared as any

// In most cases I do not want to use any, so to work around the error when using unkown type
// i can check if the unkown variable was actually set to my expected type
if (typeof message === "string") {
    messages = message;
}