//GRAB ELEMENTS FROM DOM
const startBtn = document.getElementById("start_button")
const pauseBtn = document.getElementById("pause_button")
const resettBtn = document.getElementById("reset_button")
const timerOutput = document.getElementById("output")

//EVENTLISTENERS
startBtn.addEventListener("click", startTimerFn)
pauseBtn.addEventListener("click", pauseTimerFn)
resettBtn.addEventListener("click", resetTimerFn)

let hours = 0
let minutes = 0
let seconds = 0
let centiseconds = 0
let test = "0"

//FUNCTIONS

function startTimerFn() {
  // centiseconds = centiseconds + 0.01

  // if (centiseconds === 100) {
  //   seconds = seconds + 1
  //   centiseconds = 0
  // }

  seconds = seconds + 1

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

  //ADDS A ZERO TO FORMAT TIME
  let cent = centiseconds < 10 ? "0" + centiseconds : centiseconds
  let sec = seconds < 10 ? "0" + seconds : seconds
  let min = minutes < 10 ? "0" + minutes : minutes
  let hr = hours < 10 ? "0" + hours : hours

  setTimeout(startTimerFn, 1000)
  timerOutput.innerHTML = `${hr}:${min}:${sec}:${cent}`
}

function pauseTimerFn() {
  // add pause timer logic here
}

function resetTimerFn() {
  timerOutput.innerHTML = `00:00:00:00`
}
