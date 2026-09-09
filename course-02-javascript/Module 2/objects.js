
// // let user = {
// //     name:'naima',
// //     age:25,
// //     email:'naciimaaahmed@gmail.com'
// // }
// // console.log(user)
// // console.log(user.name)

// // var house2 = {};
// // house2.rooms = 4;
// // house2.color = "pink";
// // house2.priceUSD = 12345;
// // console.log(house2.rooms)


// //Object literals and the brackets notation

// // var user = {}
// // user['name'] = 'naima'
// // user['age'] = 25
// // console.log(user)


// var car = {};
// car.color = "red";
// car["color"] = "green";
// car["speed"] = 200;
// car.speed = 100;
// console.log(car); // {color: "green", speed: 100}







// var clothes = []
// clothes.push('pants')
// clothes.push('Shirt')
// clothes.push('Trousers')
// clothes.push('Dress')
// clothes.push('Jacket')
// // clothes.pop(5)
// console.log(clothes[2])

// var favCar = {};
// favCar.color = "red";
// favCar.convertible = true;

var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}
