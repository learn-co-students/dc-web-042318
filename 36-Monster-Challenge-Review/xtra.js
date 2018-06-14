// function createSearchBtns() {
//   const backBtn = document.createElement('button')
//   const forwardBtn = document.createElement('button')
//   backBtn.innerHTML = '<='
//   backBtn.id = 'back'
//   forwardBtn.innerHTML = '=>'
//   forwardBtn.id = 'forward'
//   monsterContainer.appendChild(backBtn)
//   monsterContainer.appendChild(forwardBtn)
//   addPageChangeListeners(backBtn, forwardBtn)
// }
console.log("now you're in xtra");
const URL_PREFIX = 'http://localhost:3000'
const monsterContainer = document.querySelector('#monster-container')
const createMonster = document.querySelector('#create-monster')
const frag = document.createDocumentFragment();
let page = 1;

function getMonsters(page) {
  fetch(URL_PREFIX + `/monsters?_limit=50&_page=${page}`)
  .then(res => res.json())
  .then(json => {
    //here, I want to replace the page's content with the most recent batch of
    //fetched data - while monsterContainer has a child,
    //remove its first child until there is no first child left
    while(monsterContainer.firstChild) {
      monsterContainer.removeChild(monsterContainer.firstChild)
      }

    //then, loop through the most recent fetch payload and create new monster cards
    //for each one
    for(var i=0; i < json.length; i++) {
      createMonsterCard(json[i]);
    }
  })
}
//todo:
// add monsters to dom
  //create element for monsters
  //append relevant information
  //attach monsters to dom
  function createMonsterCard(monster) {
    const name = document.createElement('h3')
    const age = document.createElement('h4')
    const description = document.createElement('p')
    name.innerHTML = `${monster.id}: ${monster.name}`
    age.innerHTML = `Age: ${monster.age}`
    description.innerHTML = `Bio: ${monster.description}`
    frag.appendChild(name)
    frag.appendChild(age)
    frag.appendChild(description)
    // console.log('frag', frag);
    monsterContainer.appendChild(frag)
  }
//add a new monster
  //create form elements
  //capture data from form
  //fetch post request
  //render new monster at top(?)
  function createMonsterForm() {
    let form = document.createElement('form')
    let nameInput = document.createElement('input')
    let ageInput = document.createElement('input')
    let descInput = document.createElement('input')
    let submit = document.createElement('button');
    form.id = 'monster-form'
    nameInput.id = 'name'
    nameInput.placeholder = 'name'
    ageInput.id = 'age'
    ageInput.placeholder = 'age'
    descInput.id = 'description'
    descInput.placeholder = 'description'
    submit.id = 'create-btn'
    submit.innerHTML = 'Create'
    form.appendChild(nameInput)
    form.appendChild(ageInput)
    form.appendChild(descInput)
    form.appendChild(submit)
    createMonster.appendChild(form)
  }
  //functions to grab input values
  function findNameInput() {
    return document.querySelector("#name")
  }
  function findAgeInput (){
    return document.querySelector("#age")
  }
  function findDescInput (){
    return document.querySelector("#description")
  }
  //return new monster data in an object
  function getFormData() {
    return {
      name: findNameInput().value,
      age: findAgeInput().value,
      description: findDescInput().value
    }
  }
  //send form data through submit evt listener
  function sendFormData() {
    createMonster.addEventListener('submit', (e) => {
      e.preventDefault();
      let data = getFormData();
      postMonster(data)
      resetForm();
    })
  }

  function resetForm() {
    document.getElementById('monster-form').reset();
  }
  //fetch request to post new monster
  function postMonster(data) {
   let url = URL_PREFIX + "/monsters"
   let options = {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json"
     },
     body: JSON.stringify(data)
   }
   fetch(url, options)
     .then(res => res.json())
     .then(json => {
       console.log('json', json)
     })
  }
//view next 50 monsters
  //create button element
  //attach evt listener to button that fetches the next 50
  // optional parameters:
  // _limit=[number] - limit the number of monsters returned
  // _page=[number] - offset your request for monsters to some page (must specify a limit)
  //
  // example:
  // GET http://localhost:3000/monsters/?_limit=20&_page=3
  function addPageChangeListeners() {
    let back = document.getElementById('back')
    let forward = document.getElementById('forward')
    back.addEventListener('click', () => {
      pageDown()
    })
    forward.addEventListener('click', (btn2) => {
      pageUp()
    })
  }
  function pageDown() {
    if(page > 1) {
      page--
      getMonsters(page);
    } else {
      let msg = document.createElement('h2')
      msg.innerHTML = "You're at the beginning!"
      monsterContainer.appendChild(msg)
    }
  }
  function pageUp() {
    page++
    getMonsters(page)
  }

//delete if time
function init() {
  getMonsters();
  createMonsterForm();
  addPageChangeListeners();
  sendFormData();
}

document.addEventListener('DOMContentLoaded', init)
