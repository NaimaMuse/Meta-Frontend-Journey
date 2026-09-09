// // // class Purchase{
// // //     constructor(shoes,taxiState){
// // //         this.shoes = shoes;
// // //         this.taxiState = taxiState
// // //     }
// // //     totalPrice(){
// // //         return this.shoes * this.taxiState
// // //     }
// // // }

// // // var purchase1 = new Purchase(20,3)
// // // console.log(purchase1.totalPrice())



// // class Bird{
// //     useWings(){
// //         console.log("flying")
// //     }
// // }
// // class Eagle extends Bird{
// //     useWings(){
// //         super.useWings();
// //         console.log("Barely flapping!");
// //     }
// // }



// // class Penguin extends Bird {
// //     useWings() {
// //         console.log("Diving!");
// //     }
// // }

// // var baldEagle = new Eagle();
// // var kingPenguin = new Penguin();
// // baldEagle.useWings(); // "Flying! Barely flapping!"
// // kingPenguin.useWings(); // "Diving!"


// class Train{
//     constructor(color,lightson){
//         color = this.color
//         lightson = this.lightson
//     }
// }

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain)





// 1. class creation
class Train{
    constructor(color,lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;

    }
       toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus(){
        console.log('lights on',this.lightsOn)
    }
}
var train1 = new Train("red", false);
train1.toggleLights();
console.log(train1.lightsOn);