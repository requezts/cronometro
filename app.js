let hours = 00;
let minutes = 00;
let seconds = 00;
let check = false;
let interval = null;

/* function */
const time = document.getElementById('time');
const active = document.getElementById('btn');
const reset = document.getElementById('btns');

/* current time */
function currentTick() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  time.textContent = `${hours}:${minutes}:${seconds}`;
}
/* reset time */
function res() {
  hours = 00;
  minutes = 00;
  seconds = 00;
  check = false;
  clearInterval(interval);
  interval = null;
  time.textContent = `${hours}:${minutes}:${seconds}`;
}
/* buttons events */
reset.addEventListener('click', function() {
  res();
});
active.addEventListener('click', function() {
  console.log('test');
  if (check == true) {
    console.log('desactivado');
    check = false;
    clearInterval(interval);
    interval = null;
    return;
  }
  check = true;
  interval = setInterval(() => {
    currentTick();
  }, 1000);
});