console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

let tweet = "Lebron is king! Westbrook for president!";
let facebook = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = "jamespauloconnor";

let birthCity = "Indianapolis ";
let birthState = "Indiana";

console.log(birthCity + "," + birthState);

let greeting = "Hello";
let firstName = "Finn";
let lastName = "Mertens";

console.log(`${greeting}! My name is ${firstName} ${lastName}. Nice to meet you!`);

console.log(greeting + "! My name is" + firstname + " " +lastName + ". Nice to meet you!");

let cats = "3";

console.log(cats + 2); //You won't get 5! That's a lot of cats!

let ageInAugust = 40;
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;

console.log(`1${highSchool}, ${graduateHighSchool}`);
console.log(`My age is August:, ${ageInAugust}`);

let gradYear = 1994;
let highSchool = "Bill Murray High School";

//Either answer below will work
console.log("I graduated from" + highSchool + " in " +gradYear + ".");
console.log(`I graduated from ${highSchool} in ${gradYear}.`);

//length - returns the length of a string (including spaces)
console.log(highSchool.length);

//lower or upper case
console.log(highSchool.toUpperCase()); // BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split("")); //splits the string into an array(more on the datatype later) on each space ['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts the first 12 characters: from character 0(the first character) to character 11

