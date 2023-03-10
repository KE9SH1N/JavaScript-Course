// STRICT MODE 
'use strict';

let hasDriversLicense = false;

const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');


// FUNCTIONS 

function fruitProcessor(apples, oranges){
    //console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice);

// FUNCTION DECLARATION VS EXPRESSION 

function calcAge1(birthYear){
    const age = 2037-birthYear;
    return age;
}

const age1 = calcAge1(1991);
console.log(age1);

//EXPRESSION

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1992);
console.log(age1, age2);

// ARROW FUNCTION 

const calcAge3 = birthYear=> 2037-birthYear;

const age3 = calcAge3(1991);
console.log(age3);


const yearuntilRetirement = (birthYear, firstName)=>{
    const age = 2037-birthYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearuntilRetirement(1991,"jonas"));
console.log(yearuntilRetirement(1980,"bob"));



// CALLING FUNCTION IN OTHER FUNCTION 

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples and ${orangePieces} oranges`;

    return juice;
}

const processor = fruitProcessor(2,3);

console.log(processor);


// ARRAY 

const friends = ['michael', 'steven','peter'];

//Add elements
const newLength = friends.push('jay');

console.log(friends);
console.log(newLength);

friends.unshift('john');
console.log(friends);

//Remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

// OBJECT DOT OR BRACKET NOTATION 

const jonasTwo ={
    firstName: "Jonas",
    lastName:"schmedtmann",
    birthYear: 1991,
    job:"teacher",
    friends:['michael', 'peter', 'steven'],

    calcAge4: function (){
        return 2037-this.birthYear;
    }
};


console.log(jonasTwo);

console.log(jonasTwo.firstName);


// OBJECT METHODS

console.log(jonasTwo.calcAge4());
