//GRAB ELEMENTS FROM DOM
const startBtn = document.getElementById("start_button")
const pauseBtn = document.getElementById("pause_button")
const resettBtn = document.getElementById("reset_button")
const lapBtn = document.getElementById("lap_button")
const timerOutput = document.getElementById("output")
const lapOutput = document.getElementById("lap_output")
const deleteLapOutput = document.getElementById("delete_lap_button")

//EVENTLISTENERS
startBtn.addEventListener("click", startTimerFn)
pauseBtn.addEventListener("click", pauseTimerFn)
resettBtn.addEventListener("click", resetTimerFn)
lapBtn.addEventListener("click", lapTimerFn)
deleteLapOutput.addEventListener("click", deleteLapTimerFn)

//GLOBAL VARIABLES
let hours = 0
let minutes = 0
let seconds = 0
let centiseconds = 0
let lapNumber = 0
let time

//FUNCTION START TIMER

function startTimerFn() {
  centiseconds = centiseconds + 1

  if (centiseconds === 100) {
    seconds = seconds + 1
    centiseconds = 0
  }

  if (seconds === 60) {
    minutes = minutes + 1
    seconds = 0
    centiseconds = 0
  }

  if (minutes === 60) {
    hours = hours + 1
    minutes = 0
    seconds = 0
    centiseconds = 0
  }

  // //ADDS A ZERO TO FORMAT TIME
  let cent = centiseconds < 10 ? "0" + centiseconds : centiseconds
  let sec = seconds < 10 ? "0" + seconds : seconds
  let min = minutes < 10 ? "0" + minutes : minutes
  let hr = hours < 10 ? "0" + hours : hours

  time = setTimeout(startTimerFn, 10)

  timerOutput.innerHTML = `${hr}:${min}:${sec}:${cent}`
}

//FUNCTION PAUSE TIMER

function pauseTimerFn() {
  clearTimeout(time)
}

//FUNCTION RESET TIMER

function resetTimerFn() {
  timerOutput.innerHTML = `00:00:00:00`

  hours = 0
  minutes = 0
  seconds = 0
  centiseconds = 0

  clearTimeout(time)
}

//FUNCTION LAP TIMER

function lapTimerFn() {
  const laptime = document.createElement("li")
  laptime.classList = "laptime"

  let cent = centiseconds < 10 ? "0" + centiseconds : centiseconds
  let sec = seconds < 10 ? "0" + seconds : seconds
  let min = minutes < 10 ? "0" + minutes : minutes
  let hr = hours < 10 ? "0" + hours : hours

  lapNumber = lapNumber + 1

  laptime.innerHTML = `${lapNumber}:  ${hr}:${min}:${sec}:${cent}`
  lapOutput.appendChild(laptime)
}

//FUNCTION DELETE ALL LAPS

function deleteLapTimerFn() {
  lapOutput.innerHTML = ""
}
