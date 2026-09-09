// // ......>>>>>>>>>  for in loop >>>>>...
// for...in loops through the property names of an object.
// const car ={
//     engine: true,
//     steering: true,
//     speed: "slow"
// };
// for(let prob in car){
//     console.log(prob)
// }

// const car = {
//   engine: true
// };

// const sportsCar = Object.create(car);
// sportsCar.speed = "fast";

// for (let prop in sportsCar) {
//   console.log(prop);
// }







// 2. for...of

// for...of is used to loop through values of an iterable, such as an array.

// let fruits = ['mango','apple','banana']

// for(let fruit of fruits){
//     console.log(fruit)
// }

const sportsCar = {
  speed: "fast"
};

for (let prop of Object.keys(sportsCar)) {
  console.log(prop + ": " + sportsCar[prop]);
}