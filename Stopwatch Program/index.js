let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
    let h = hours.toString().padStart(2, "0");
    let m = minutes.toString().padStart(2, "0");
    let s = seconds.toString().padStart(2, "0");
    let ms = milliseconds.toString().padStart(2, "0");

    document.getElementById("display").innerText = `${h}:${m}:${s}:${ms}`;
}

function stopwatch() {
    milliseconds++;
    if (milliseconds === 100) { // 100 salise = 1 saniye
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function start() {
    if (!running) { // tekrar tekrar basınca hızlanmasın
        timer = setInterval(stopwatch, 10); // her 10ms'de bir çalışsın
        running = true;
    }
}

function stop() {
    clearInterval(timer);
    running = false;
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
    running = false;
    updateDisplay();
}

// İlk ekranda sıfırları göstermek için
updateDisplay();
