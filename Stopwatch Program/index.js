let startTime = null;
let elapsed = 0;
let timer = null;
let running = false;

function updateDisplay() {
  let time = Date.now() - startTime + elapsed; // geçen toplam süre (ms)
  
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor((time % 1000) / 10);

  document.getElementById("display").innerText =
    `${hours.toString().padStart(2,"0")}:` +
    `${minutes.toString().padStart(2,"0")}:` +
    `${seconds.toString().padStart(2,"0")}:` +
    `${milliseconds.toString().padStart(2,"0")}`;
}

function start() {
  if (!running) {
    startTime = Date.now();
    timer = setInterval(updateDisplay, 10);
    running = true;
  }
}

function stop() {
  if (running) {
    clearInterval(timer);
    elapsed += Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  elapsed = 0;
  startTime = null;
  running = false;
  document.getElementById("display").innerText = "00:00:00:00";
}
