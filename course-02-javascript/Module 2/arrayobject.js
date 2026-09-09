// var fruits = []
// fruits.push('apple');
// fruits.push('mango');
// fruits.push('juice');

// console.log(fruits)

// fruits.pop(); //removes the last item
// console.log(fruits)


// function arrayBuilder(one,two,three){
//     var arry = []
//     arry.push(one)
//     arry.push(two)
//     arry.push(three)
//     console.log(arry)
// }

// arrayBuilder('apple','mango','juce')

function arrayBuilder(one,two,three){
    var arry = []
    arry.push(one);
    arry.push(two);
    arry.push(three);
    return arry;
}

console.log(arrayBuilder('apple','mango','juce'))