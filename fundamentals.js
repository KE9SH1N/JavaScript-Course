// INTRODUCTION
console.log("Hello World!");

let js = "amazing";
console.log (40+8+23-10);

// VARIABLES
let firstName = "Jonas";
console.log(firstName);

// DATA TYPES
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

jsIsFun = "yes!";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// VAR LET CONST

let age = 30;  //can changeable in future
age =32;

const birthYear =  1994; //can't changeable in future

// older version of let
var job = "coder";
job = "teacher";


// OPERATORS

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018; 
console.log(ageJonas, ageSarah);

// math operators
console.log(ageJonas*2, ageJonas/10, 2**3);
// 2 ** 3 means two to the power of 3 = 2*2*2 = 8


// concatanate
const firstPersonName = "jonas";
const lastPersonName = "schmedtman";
console.log(firstPersonName + " " + lastPersonName); //we can do it by using template string

// assignment operators
let x = 10+5; //15
x+=10; //25 here x = 15 then added 10
x*=4; //25*4 = 100
x++; //101
x--; //100
console.log(x);

// comparison operators
console.log(ageJonas> ageSarah);
console.log(ageSarah >=19);

const isFullAge = ageSarah>=19;

console.log(now-1991 < now - 2018);

// precedence

console.log(25-10-5); //left to right

let z,y;
z = y = 25-10-5; //right to left -cz x,y is not undefined here.

const avgAge = (ageJonas+ ageSarah) / 2; //grouping is executed first
console.log(avgAge);

// CODING CHALLENGE#1

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;


const markBMI = markMass/(markHeight*markHeight);
const johnBMI = johnMass/(johnHeight*johnHeight);

console.log(markBMI,johnBMI);

const markHeigerBMI = (markBMI>johnBMI);

console.log(markHeigerBMI);


// STRINGS AND TEMPLATE LITERALS

const jFirstName = 'jonas';
const jobs= 'teacher';
const birthYears = '1991';
const years = 2037;

const jonas = "I'm " + jFirstName + ', a ' + (years - birthYears) + ' years old ' + jobs + ' !';
console.log(jonas);

const jonasNew = `I'm ${jFirstName}, a ${years-birthYears} year old ${job}s!`;
console.log(jonasNew);
