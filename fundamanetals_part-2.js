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

