"use strict";

document.addEventListener("DOMContentLoaded", init);

const myFirstName = "magnus";
let myMiddleName = "vagn";
const myLastName = "jensen";

const timmiName = "timmi";

function init() {
  capitalize(myFirstName);
  fullName(myFirstName, myMiddleName, myLastName);

  capitalize(timmiName);
}

function capitalize(firstName) {
  let firstCapLet = firstName.toUpperCase()[0];

  let name =
    firstCapLet +
    firstName.substring(1) +
    " " +
    myMiddleName +
    " " +
    myLastName;

  return name;
}

function fullName(a, b, c) {
  let fullName2 = capitalize(myFirstName, myMiddleName, myLastName);

  if (b == undefined) {
    console.log(fullName2);
  } else {
    console.log(fullName2);
  }
}
