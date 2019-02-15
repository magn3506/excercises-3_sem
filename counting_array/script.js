"use strict";

window.addEventListener("DOMContentLoaded", init);

const arr = [];
let count = 1;

function init() {
  createBox();
  counting();
}

function counting() {
  if (count < 40) {
    arr.unshift(Math.random());
    count++;
    setTimeout(counting, 100);
    setValue();
  } else {
    arr.splice(39, 1);
    arr.unshift(Math.random());
    count++;
    setTimeout(counting, 100);
    setValue();
    // createBox();
  }
}

// CREATES BARS
function createBox() {
  for (let i = 0; i < 39; i++) {
    let clone = document.querySelector(".target").content.cloneNode(true);
    let output = document.querySelector(".barChart_wrap");

    output.appendChild(clone);
  }
}

// SETS VALUE OF BAR = ARRAY
function setValue() {
  for (let i = 1; i <= 39; i++) {
    document.querySelector(
      ".barChart_wrap :nth-child(" + i + ")"
    ).style.height =
      arr[i] * 100 + "px";
  }
}
