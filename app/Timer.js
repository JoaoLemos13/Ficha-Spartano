//import { tempo } from "./main";
let tempoDeDescanso = JSON.parse(localStorage.getItem("tempoDeDescanso")) || ""

let TempoParaDescanso = document.getElementById("timer-display")

TempoParaDescanso.addEventListener("input", () => {
  let TempoParaDescansoConver = TempoParaDescanso.textContent
 let tempoMofificado = TempoParaDescansoConver.replace(/:/g,".")
 console.log(TempoParaDescansoConver)
  let tempoDeDescansoFinal = parseFloat(tempoMofificado)

  localStorage.setItem("tempoDeDescanso", tempoDeDescansoFinal)
  
  

 
 
 let duration = tempoParaMilissegundos(tempoDeDescansoFinal);

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
    console.log(duration)
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
  clearInterval(intervalId); // Pare o intervalo quando o botão de pausar for clicado
  startButton.textContent = 'Retomar';
  paused = true;
}

function resumeTimer() {
  startTimer(endTime - Date.now());
}

function resetTimer() {
  clearInterval(intervalId);
  timerDisplay.textContent = `${TempoParaDescansoConver}`;
  startButton.textContent = 'Iniciar';
  paused = false;
}

function updateTimer() {
  const remainingTime = endTime - Date.now();

  if (remainingTime <= 0) {
    clearInterval(intervalId);
    timerDisplay.textContent = '00:00';
    // Disparar a vibração aqui
   
   navigator.vibrate([1000, 500, 1000])
    return;
  }

  
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  const formattedTime = formatTime( minutes, seconds);
  timerDisplay.textContent = formattedTime;
}

function formatTime(minutes, seconds) {
  const formattedMinutes = padZero(minutes);
  const formattedSeconds = padZero(seconds);

  return `${formattedMinutes}:${formattedSeconds}`;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}



})

function tempoParaMilissegundos(tempoDecimal) {
  // Convertendo o tempo decimal em horas, minutos e segundos
  
  const minutos = Math.floor((tempoDecimal) );
  const segundosDecimal = (tempoDecimal - minutos) * 100;
  const segundos = Math.round(segundosDecimal * 0.6); 

  // Convertendo horas, minutos e segundos para milissegundos
  
  const minutosEmMilissegundos = minutos * 60 * 1000;
  const segundosEmMilissegundos = segundos * 1000;

  // Somando os milissegundos de cada unidade de tempo
  return  minutosEmMilissegundos + segundosEmMilissegundos;
}

// Usando a função para converter o tempo de descanso para milissegundos

TempoParaDescanso.addEventListener("input", function() {
  const conteudo = TempoParaDescanso.textContent;
  const regexNumeros = /^[0-9:]+$/;

  if (!conteudo.match(regexNumeros)) {
      // Se o conteúdo não contiver apenas números, limpe a div
      TempoParaDescanso.textContent = "00:00";
  }
});