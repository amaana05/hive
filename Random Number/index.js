const incButton = document.getElementById("incButton");
const resetButton = document.getElementById("resetButton");
const decButton = document.getElementById("decButton");
const randomButton = document.getElementById("randomButton");

const counter = document.getElementById("counter");

let count = 0;


incButton.onclick = function(){
    count++;
    counter.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    counter.textContent = count;
}

decButton.onclick = function(){
    count--;
    counter.textContent = count;
}

randomButton.onclick = function(){
    count = Math.floor(Math.random()*100) + 1;
    counter.textContent = count;
}

