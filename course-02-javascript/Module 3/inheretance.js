// // // // // var Bird= {
// // // // //     hasWings : true,
// // // // //     canFlay:true,
// // // // //     hasFeathers:true

// // // // // }



// // // // // var Bird1 = Object.create(Bird)

// // // // // console.log("bird1",Bird1)

// // // // // console.log("bird1 has " ,Bird1.hasWings)
// // // // // console.log("bird1 has " ,Bird1.canFlay)
// // // // // console.log("bird1 has " ,Bird1.hasFeathers)



// // // // class Train {
// // // //     constructor(color, lightsOn) {
// // // //         this.color = color;
// // // //         this.lightsOn = lightsOn;
// // // //     }
// // // // }

// // // // class Train1 extends Train{
// // // //     constructor(passenger,speed,color,lightsOn){
// // // //         super(color,lightsOn)
// // // //         this.passenger = passenger
// // // //         this.speed = speed
// // // //     }
// // // // }


// // //     class Cake {
// // //         constructor(lyr) {
// // //             this.layers = lyr + 1;
// // //         }
// // //     }

// // //     var result = new Cake(1);
// // //     console.log(result.layers);

// //     class Animal {
// //         constructor(lg) {
// //             this.legs = lg;
// //         }
// //     }

// //     class Dog extends Animal {
// //         constructor() {
// //             super(4);
// //         }
// //     }

// //     var result = new Dog();
// //     console.log(result.legs);


//     class Animal {

//     }

//     class Cat extends Animal {
//       constructor() {
//         super();
//         this.noise = "meow";
//       }
//     }

//     var result = new Animal();
//     console.log(result.noise);


    class Person {
        sayHello() {
            console.log("Hello");
        }
    }

    class Friend extends Person {
        sayHello() {
            console.log("Hey");
        }
    }

    var result = new Friend();
    result.sayHello();
