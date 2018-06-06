// IIFE immediately invoked function expression
console.log("loaded the index.js file");

function listenForClicks() {
  console.log("calling listenForClicks");
  let clickCount = 0;
  document.querySelector("button").addEventListener("click", function() {
    clickCount += 1;
    console.log("clicked " + clickCount);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  listenForClicks();
});
