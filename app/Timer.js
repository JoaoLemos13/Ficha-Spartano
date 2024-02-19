//import { tempo } from "./main";
let tempoDeDescanso = JSON.parse(localStorage.getItem("tempoDeDescanso")) || ""

let TempoParaDescanso = document.getElementById("timer-display")

TempoParaDescanso.addEventListener("blur", () => {
  let TempoParaDescansoConver = TempoParaDescanso.textContent
 let tempoMofificado = TempoParaDescansoConver.replace(/:/g,".")
 
  let tempoDeDescansoFinal = parseFloat(tempoMofificado)

  localStorage.setItem("tempoDeDescanso", tempoDeDescansoFinal)
  
  

 

let duration = tempoDeDescansoFinal* 60040; // 5 minutos em milissegundos

const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const timerDisplay = document.getElementById('timer-display');

let intervalId;
let endTime;
let paused = false;

startButton.addEventListener('click', () => {
  if (!paused) {
    startTimer(duration);
  } else {
    resumeTimer();
  }
});

pauseButton.addEventListener('click', () => {
  pauseTimer();
});

resetButton.addEventListener('click', () => {
  resetTimer();
});

function startTimer(duration) {
  clearInterval(intervalId);

  endTime = Date.now() + duration;

  intervalId = setInterval(updateTimer, 1000);
  startButton.textContent = 'Retomar';
  paused = false;
}

function pauseTimer() {
  clearInterval(intervalId);
  startButton.textContent = 'Retomar';
  paused = true;
}

function resumeTimer() {
  startTimer(endTime - Date.now());
}

function resetTimer() {
  clearInterval(intervalId);
  timerDisplay.textContent = '00:00';
  startButton.textContent = 'Iniciar';
  paused = false;
}

function updateTimer() {
  const remainingTime = endTime - Date.now();

  if (remainingTime <= 0) {
    clearInterval(intervalId);
    timerDisplay.textContent = '00:00:00';
    // Disparar a vibração aqui
   
   navigator.vibrate([1000, 500, 1000])
    return;
  }

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  const formattedTime = formatTime(hours, minutes, seconds);
  timerDisplay.textContent = formattedTime;
}

function formatTime(hours, minutes, seconds) {
  const formattedHours = padZero(hours);
  const formattedMinutes = padZero(minutes);
  const formattedSeconds = padZero(seconds);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}

if (duration == 0) {
  timerDisplay.style.color = "#F74D0C";
  timerDisplay.classList.add("blink"); // Adiciona a classe de animação
} else {
  timerDisplay.classList.remove("blink"); // Remove a classe de animação se a duração for diferente de zero
}

})

