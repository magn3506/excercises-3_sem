"use strict";

document.addEventListener("DOMContentLoaded", init);

let firstName = "albus";
let middleName = "percival wulfric brian";
let lastName = "dumbledore";

function init() {
  fullName(firstName, middleName, lastName);
}

function capitalize(a) {
  let firstCap = a.toUpperCase()[0];
  let firstNameCap = firstCap + a.substr(1);

  return firstNameCap;
}

function fullName(a, b, c) {
  let x = capitalize(a);
  let y = capitalize(b);
  let z = capitalize(c);

  if (b == undefined) {
    let fullName = x + " " + y;
    return fullName;
  } else {
    let fullName = x + " " + y + " " + z;

    return fullName;
  }
}

let longName = fullName(firstName, middleName, lastName);

console.log(longName);
