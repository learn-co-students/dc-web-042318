//solution file, check that it is being loaded via script tags in index.html
const counter = document.querySelector("h1#counter")
const minus = document.getElementById('-');
const plus = document.getElementById('+');
const heart = document.getElementById('<3');
const likes = document.querySelector(".likes");

const likeTracker = {}

const startInterval = () => {
  setInterval(increaseCount, 1000)
}

const increaseCount = () => {
  counter.innerText = parseInt(counter.innerText) + 1
}

const subtractTime = () => {
  counter.innerText = parseInt(counter.innerText) - 1
}

const likeNumber = () => {
  let li = document.createElement('li')

  let number = counter.innerText
  //if the key does not exist in the object
    //add the key to the object with the value of 1
  if (!likeTracker[number]) {
    likeTracker[number] = 1
    li.id = number
    li.innerText = `You liked ${number} 1 time!`
    likes.appendChild(li)
  } else { //if it already exists in the object, increment by 1
    likeTracker[number] += 1
    li = document.getElementById(number)
    li.innerText = `You liked ${number} ${likeTracker[number]} times!`
  }
}



document.addEventListener("DOMContentLoaded", startInterval)
minus.addEventListener("click", subtractTime)
plus.addEventListener("click", increaseCount)
heart.addEventListener("click", likeNumber)


//how do I select elements on the page?
//how to I check for user interactions?
    //how do I add Event Listeners to these elements?
//how do I handle the events that take place?
//how do I change what the user sees based on the event?


























// const counter = document.getElementById('counter');
// const minus = document.getElementById('-');
// const plus = document.getElementById('+');
//
// const pause = document.getElementById('pause');
// const form = document.getElementById('comment-form');
// const comments = document.getElementById('list');
// const allButtons = document.querySelectorAll('button');
// const likes = document.querySelector(".likes");
// const commentInput = document.getElementById("comment-input");
