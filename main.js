let btn = document.getElementById("btn");
let count = 0;
let counter = document.getElementById("counter");
let audio = new Audio('180.m4a');

function changeBackground() {
    document.body.style.background = `rgb(${randint()}, ${randint()}, ${randint()})`;
    updateDisplay(++count);
    if (count==180) {
      playAudio();
      console.log("180");
    } 
 }
 
 function randint() {
    let max = 240;
    let min = 0;
    return Math.round(Math.random() * (max - min)) + min;   
 }

 function updateDisplay(val) {
   counter.innerHTML = count;
}

function resetCounter() {
   count = 0;
   updateDisplay(count);
}
 
function playAudio() {
   audio.play();
   console.log("audio played");
}

