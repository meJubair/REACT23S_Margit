const startButton = document.querySelector('#startButton')
const endButton = document.querySelector('#endButton')
const circles = document.querySelectorAll('.circle')
const scoreDisplay = document.querySelector('.score')

// global variables
let score = 0;
let timer;
let pace = 1000;
let active = 0;
let rounds = 0;

// code from W3S page for the random number 
/* function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} */

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const clickCircle = (i) => {
  if (i !== active) {
    return endGame()
  }
  rounds--
  score += 10
  scoreDisplay.textContent = score
}

circles.forEach((circle, i) => {
  circle.addEventListener('click', () => clickCircle(i))
})

// same functionality as forEach() but for...of instead
/* for (const [i, item] of circles.entries()) {
  item.addEventListener('click', () => clickCircle(i))
} */

const enableEvents = () => {
  circles.forEach(circle => {
    circle.style.pointerEvents = "auto"
  })
}

const startGame = () => {
  if (rounds >= 3) {
    return endGame()
  }

  enableEvents();
  const newActive = pickNew(active)

  circles[newActive].classList.toggle('active')
  circles[active].classList.remove('active')

  active = newActive;

  timer = setTimeout(startGame, pace)

  pace -= 10
  rounds++
  function pickNew(active) {
    const newActive = getRndInt(0, 3)
    if (newActive !== active) {
      return newActive
    }
    return pickNew(active)
  }
}

const endGame = () => {
  console.log('game ended');
  clearTimeout(timer);
  resetGame();
}

const resetGame = () => {
  window.location.reload()
}

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)