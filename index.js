const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const counterDisplay = document.getElementById('countlable');

let count = 0;

incrementBtn.onclick = function () {
  count++;
  counterDisplay.textContent = count;
};


decrementBtn.onclick = function () {
  count--;
  counterDisplay.textContent = count;
};


resetBtn.onclick = function () {
  count = 0;
  counterDisplay.textContent = count;
};

