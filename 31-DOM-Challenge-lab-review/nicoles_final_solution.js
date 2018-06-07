const counter = document.getElementById('counter');
const minus = document.getElementById('-');
const plus = document.getElementById('+');
const heart = document.getElementById('<3');
const pause = document.getElementById('pause');
const form = document.getElementById('comment-form');
const comments = document.getElementById('list');
const allButtons = document.querySelectorAll('button');
const likes = document.querySelector(".likes");
const commentInput = document.getElementById("comment-input");

let isPaused;

const startInterval = () => {
  setInterval(timer, 1000)
}

const timer = () => {
  // console.log("hit timer")
  if (!isPaused) {
    counter.innerText = parseInt(counter.innerText) + 1
  }
}

const addTime = () => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1
}

const subtractTime = () => {
  counter.innerHTML = parseInt(counter.innerHTML) - 1
}

const handlePause = () => {
  isPaused ? resumeGame() : pauseGame()
}

const pauseGame = () => {
  isPaused = true // set isPause to true
  pause.innerText = 'resume' //change button innerText to 'resume'
  allButtons.forEach(button => { //disable all buttons
    if (button.id !== "pause") {
      button.setAttribute("disabled", true)
    }
  })
}

const resumeGame = () => {
  isPaused = false //set isPaused to false
  pause.innerText = 'pause' //change button text to 'pause'
  allButtons.forEach(button => { //enable all buttons again
    if (button.id !== "pause") {
      button.removeAttribute("disabled")
    }
  })
}

const likeNumber = () => { // when like button is clicked
  let likeTracker = {}
  let number = counter.innerHTML //grab current value of count
  let li;
  if (!likeTracker[number]){ //if number doesnt exist in object
    likeTracker[number] = 1
    li = document.createElement("LI")
    li.id = number
    li.innerText = `${number} has been liked 1 time`
    likes.appendChild(li)
  } else { // number already exists, increment by 1 each time its clicked
    likeTracker[number] += 1
    li = document.getElementById(number) //grabbing the LI and changing innertext based on value
    li.innerText = `${number} has been liked ${likeTracker[number]} times`
  }

}

const addComment = (e) => {
  e.preventDefault()
  let commentEl = document.createElement('p')
  commentEl.innerText = commentInput.value
  comments.appendChild(commentEl)
  form.reset() // or set value to empty string here
}

document.addEventListener("DOMContentLoaded", startInterval);
plus.addEventListener("click", addTime)
minus.addEventListener("click", subtractTime)
pause.addEventListener("click", handlePause);
heart.addEventListener("click", likeNumber);
form.addEventListener("submit", addComment);
