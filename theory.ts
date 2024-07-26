

// ... NEVER TYPE ... //
// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing
//left.typeScript will use a never type to represent a state which shouldn’t exist.



// ... ENUMS ... //
// describing a value which could be one of a set of possible named constants.



// ... Q: WHY WE USE BigInt ? ... //
// From ES2020 onwards, there is a primitive in JavaScript used for very large integers, BigInt



// .... TYPE ALIAS ... //
// Type aliases give a type a new name.Aliasing doesn’t truly create a new type; instead, it gives that type a new name.



// ... INTERSECTION TYPES ... //
// Intersection types are a way to combine multiple types into one. The resulting type is a mix of
// all the properties of the types being intersected.



// ... GENERIC OBJECT TYPE ... //
// A generic object type is a type that describes an object with a set of properties, where the
// names of the properties are known, but the types of the properties are not known. The type
// of the properties is described using a generic type parameter.



// ... OBJECT ... //
// Object types are a way to describe the shape of an object. They are used to describe the
// properties and methods of an object, and to ensure that the object has the correct structure.



// ... TYPESCRIPT ... //
// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript,TypeScript is a strongly typed language,
// which means that it enforces type safety at compile time, early error,improved tooling.



// ... INDEX SIGNATURE ... //
// to define properties with dynamic names.

// ... TYPE ALIAS ... //
// creating multiple references to the object.



// ... What are the benifits of typescript? ... //
// 1. Type safety.
// 2. Strongly typed.
// 3. Static typing.
// 4. Compile time checking.
// 5. Easy to use.
// 6. Easy to learn.
// 7. Easy to maintain.
// 8. Easy to debug.
// 9. Easy to test.



// ... What are template literals in TypeScript, and how are they used? ... //
// Template literals are a way to include variables and expressions in strings. They are used by enclosing the
// variable or expression in backticks (`) instead of quotes, and also use $ sign.
const name = 'Yousra';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Yousra!



// ... What is a switch statement, and how does it differ from an if-else statement? ... //
// A switch statement is a way to execute a block of code based on the value of a variable or expression. 
//It is similar to an if-else statement,but it allows for multiple cases to be checked at once.
// The main difference between a switch statement and an if-else statement is that a switch statement allows
// for multiple cases to be checked at once, while an if-else statement only allows for one
// case to be checked at a time. Additionally, a switch statement is more concise and easier to
// read than an if-else statement.



// ... INTERSECTION TYPES ... //
//An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single
// type with all of the properties that you require.

const obj: { a: number; b: string } & { c: boolean } ={ a: 1, b: 'hello', c: true };
 console.log(obj.a); // 1
 console.log(obj.b); // hello
 console.log(obj.c); // true



 //... typeof ... //
 //The typeof operator returns the type of its operand. It can be used to determine the type of
 // a variable, a property, or an expression.
 const x = 10
 console.log(typeof x); // output number
 



 // ... TYPE CASTING ... //
 //Type casting is the process of explicitly specifying the type of a variable.
const k = 10 as number;
console.log(x); // 10



// ...  MAP METHOD ... //
//The map method is a built-in method in TypeScript that allows you to apply a function to each
// element in an array and return a new array with the results. It is similar to the forEach
// method, but it returns a new array instead of modifying the original array.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number / 2);
console.log(doubledNumbers); // Output: [2, 4, 6,8, 10]




// ... Describe the for...of loop and provide an example of its usage ... //
//The for...of loop is a way to iterate over the elements of an iterable object, such
//as an array or a string. It is similar to the for...in loop, but it only iterates over the elements of the 
//iterable object, rather than the properties of the object. 
const numberss = [1, 2, 3, 4, 5];
for (const number of numberss) {
    console.log(number); // Output: 1, 2, 3, 4
}



// ... What is a rest parameter in TypeScript, and how is it used in a function? 
//A rest parameter is a parameter that allows you to pass in an indefinite number of arguments to a
// function. It is denoted by three dots (...) before the parameter name. The rest parameter is
// treated as an array, and you can access its elements using array notation.
function sum(...numbers: number[]) {
    let total = 0;
    for (const number of numbers) {
        total += number;
        }
        return total;
        }
        console.log(sum(1, 2, 3, 4, 5)); //Output: 15




// ...  What is an interface in TypeScript, and how is it used? //
//An interface is a way to define the shape of an object, including the names of its properties
// and the types of its properties.
interface Person {
    name: string;
    age: number;
    occupation: string;
}
const person: Person = {
    name: 'Yousra Khan',
    age: 30,
    occupation: 'Generative AI Engineer',
    };
 
    


//  ... What is an enum in TypeScript, and how is it different from a const enum? ... //
//An enum is a way to define a set of named values. It is similar to a const
// enum, but it is not evaluated at compile-time. Instead, it is evaluated at runtime.
enum Color {
    Red = 1,
    Orange=2,
    Blue=3
}

// ... What is a tuple in TypeScript, and how is it different from an array? ... //
//A tuple is a fixed-size, ordered collection of values that can be of different types.
//It is similar to an array, but it is not a dynamic collection of values.
const tuple:[number , string , boolean] = [23 , "Yousra" , true];


// ... Explain the concept of hoisting in TypeScript ... //
//Hoisting is a JavaScript feature that allows you to use a variable or function before it is
// declared. In TypeScript, hoisting is also supported, but it is not as flexible as in
// JavaScript. In TypeScript, you can only hoist function declarations, not variable
// declarations.
function test() {
   // console.log(x); // show error (hoisting may hum log pehly krty hyn then valye baad may assign krty hyn)
    let x = 10;
    }
    test(); // Output: undefined



// ... What is a module in TypeScript, and how do you export and import modules? ... //
//A module is a file that contains a set of related functions, classes, and variables.
//You can export a module using the export keyword, and import it using the import keyword.
//myModule.ts
export function add(a: number, b: number): number {
    return a + b;
    }
    //main.ts
    // import { add } from './myModule'; 
    console.log(add(2, 3)); // Output: 5



// ... Describe the difference between a try...catch block and a try...catch...finally block in TypeScript ... // 
//A try...catch block is used to catch and handle exceptions that occur in a block of code
//A try...catch...finally block is used to catch and handle exceptions that occur in a block
//of code, and also to execute a block of code regardless of whether an exception occurred or not

                   
// ... What are generics in TypeScript, and why are they useful? ... //
//Generics are a feature in TypeScript that allows you to create reusable functions and classes
//that can work with any data type, rather than just a specific data type. This is useful
//when you want to create a function or class that can work with multiple data types, but you
//don't want to have to create a separate version of the function or class for each data type

function identity<T>(arg: T): T {
    return arg;
    }
    // Usage of the generic function
    console.log(identity<string>('hello')); // Output: hello
    console.log(identity<number>(42)); // Output: 42










