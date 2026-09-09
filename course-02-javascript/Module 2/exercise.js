// // // // // // // // // Instructions
// // // // // // // // // Note: Please make use of the code block placed at the bottom of this reading to complete the iteratively built exercise.

// // // // // // // // // Task 1: Code a function declaration
// // // // // // // // // You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.
// // // // // // // // // function addTwoNums(a,b){
// // // // // // // // //     return console.log(a+b);
// // // // // // // // // }
// // // // // // // // // addTwoNums(5,'5')

// // // // // // // // // Task 2: Invoke the addTwoNums function with a number and a string
// // // // // // // // // You need to invoke the addTwoNums using the following arguments: 5 and "5".

// // // // // // // // // Note: Passing a number and a string will result in "55" (string concatenation) due to JavaScript's type coercion. This will be handled later when you add type-checking logic in Task 4 below.

// // // // // // // // // Task 3: Update the addTwoNums function with a try...catch block
// // // // // // // // // Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.

// // // // // // // // // Task 4: If the passed-in arguments are not numbers, throw an error
// // // // // // // // // Note: The new keyword is used here to create a new instance of a TypeError object. You will learn more about the new keyword and objects in later lessons. For now, understand that throw new TypeError('message') is the standard way to throw a type error in JavaScript.

// // // // // // // // // If either of the arguments passed to the addTwoNums function is not a number, you will throw an error.

// // // // // // // // // Specifically, code a conditional with the following logic:

// // // // // // // // // If the typeof the a parameter is not equal to 'number', throw a new TypeError. Inside the TypeError, include the custom error message: 'The first argument is not a number.'

// // // // // // // // // Else if the typeof the b parameter is not equal to 'number', throw a new TypeError. Inside the TypeError, include the custom error message: 'The second argument is not a number.'

// // // // // // // // // Else, log the sum of a + b to the console.

// // // // // // // // // Once you’ve completed this task:

// // // // // // // // // Wrap all the conditional logic inside the try block.

// // // // // // // // // The catch block will handle any errors thrown by the conditionals and log them appropriately.

// // // // // // // // // Note: So how did This Handles type coercion?

// // // // // // // // // By explicitly checking the typeof of a and b, the function ensures only numbers are accepted.

// // // // // // // // // Passing a string like "5" will no longer result in "55" because the error will stop the execution before the addition operation.

// // // // // // // // // Task 5: Update the catch block
// // // // // // // // // Inside the catch block, update the code from console.log(err) to console.log("Error!", err).

// // // // // // // // // Task 6: Invoke the addTwoNums function
// // // // // // // // // Invoke the addTwoNums function using 5 and "5" as arguments.

// // // // // // // // // Task 7: Add another console log under the addTwoNums function invocation
// // // // // // // // // Add another line of code that console logs the string "It still works".


// // // // // // // // function addTwoNums(a,b){
// // // // // // // //     try{
// // // // // // // //         if(typeof(a)!='number'){
// // // // // // // //              throw new ReferenceError('number one is not number value')
// // // // // // // //         }
// // // // // // // //         else if(typeof(b)!='number'){
// // // // // // // //             throw new ReferenceError('number one is not number value')
// // // // // // // //         }
// // // // // // // //         else{
// // // // // // // //             console.log(a+b)
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // //     catch(err){
// // // // // // // //         console.log('error',err)
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // addTwoNums(5, "5")
// // // // // // // // console.log("It still works")












// // // // // // // // function letterFinder(word, match) {

// // // // // // // //     var condition1 = typeof(word) == 'string' && word.length >= 2;

// // // // // // // //     var condition2 = typeof(match) == 'string' && match.length == 1;

// // // // // // // //     if(condition1 && condition2) {

// // // // // // // //         for(var i = 0; i < word.length; i++) {

// // // // // // // //             if(word[i] == match) {
// // // // // // // //                 console.log('Found the', match, 'at', i);
// // // // // // // //             } else {
// // // // // // // //                 console.log('---No match found at', i);
// // // // // // // //             }
// // // // // // // //         }

// // // // // // // //     } else {

// // // // // // // //         console.log("Please pass correct arguments to the function.");

// // // // // // // //     }
// // // // // // // // }

// // // // // // // // letterFinder("cat", "c");

// // // // // // // // letterFinder(123, 456);

// // // // // // //   var result = null;
// // // // // // //   console.log(result);


// // // // // //   try {
// // // // // //     console.log('Hello');
// // // // // //   } catch(err) {
// // // // // //     console.log('Goodbye');
// // // // // //   }

// // // // // var x ;
// // // // // console.log(x)


// // // // //   var x;

// // // // //   if(x === null) {
// // // // //     console.log("null");
// // // // //   } else if(x === undefined) {
// // // // //     console.log("undefined");
// // // // //   } else {
// // // // //     console.log("ok");
// // // // //   }


// // // // //   throw new Error();
// // // // //   console.log("Hello");


// // // // try {
// // // // console.log('hello)
// // // // } catch(e) {
// // // // console.log('caught')
// // // // }


// // //   try {
// // //     throw new Error();
// // //     console.log('Hello');
// // //   } catch(err) {
// // //     console.log('Goodbye');
// // //   }


// //   function add(a, b) {
// //     console.log(a + b)
// //   }

// //   add(3, "4");

// var str = "Hello";
// console.log(str.match("jello"));

try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}