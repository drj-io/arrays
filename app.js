var fruits = ["apple","kiwi","oranges","strawberry","mango","kumquat"];
var moreFruits = ["raspberry", "Pineapple","grape"];

var otherFruit = ["Dragon Fruit"];

var allFruits = fruits.concat(moreFruits);

allFruits.push(otherFruit);

console.log(allFruits.sort().reverse());


//console.log(getTheLength(fruits));


function getTheLength(a){

    return a.length
}
