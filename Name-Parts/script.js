"use-strict";

const fullName = "Magnus Vagn Jensen";

const word = fullName.split(" ");

const firstName = word[0];
const middleName = word[1];
const lastName = word[2];

const stringName = firstName + " " + middleName + " " + lastName;

console.log(fullName);

console.log(fullName.indexOf("Vagn"));

console.log(word[2]);

console.log(fullName.split(" ")[2]);

console.log(firstName + " " + middleName + " " + lastName);

console.log(firstName.toLocaleLowerCase());

console.log(stringName.toLowerCase());
console.log(stringName.toUpperCase());
