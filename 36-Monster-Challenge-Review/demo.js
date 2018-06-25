//todo:
// FETCH AND ADD MONSTERS TO DOM

const URL_PREFIX = 'http://localhost:3000/'
let page = 1;

  //create element for monsters
  //fetch monsters
    // optional parameters:
    // _limit=[number] - limit the number of monsters returned
    // _page=[number] - offset your request for monsters to some page (must specify a limit)
    // example:
    // GET http://localhost:3000/monsters/?_limit=20&_page=3
  //attach monsters

const getMonsters = (page) => {
  console.log("get monsters function");
  fetch(URL_PREFIX + `monsters/?_limit=50&_page=${page}`)
    .then(res => res.json())
    .then(json => {
      document.querySelector('#monster-container').innerHTML = "";
      for(let i = 0; i < json.length; i++) {
        console.log('monster', json[i])
        createMonsterCard(json[i]);
      }
  })
}

const createMonsterCard = (monster) => {
  let card = document.createElement('div');
  let name = document.createElement('h2');
  let age = document.createElement('h4');
  let description = document.createElement('p');

  name.innerHTML = `${monster.name}`
  age.innerHTML = `Age: ${monster.age}`
  description.innerHTML = `Bio: ${monster.description}`

  card.appendChild(name)
  card.appendChild(age)
  card.appendChild(description)

  document.querySelector('#monster-container').appendChild(card);
}

//ADD NEW MONSTER
//create form elements
//capture data from form
//fetch post request
//render new monster at top(?)

  //grab input values
  //return new monster data from form in an object

  //send form data through submit evt listener

  //fetch request to post new monster
  //clear form inputs

  const createMonsterForm = () => {
    const monsterForm = document.createElement('form')
    const nameInput = document.createElement('input')
    const ageInput = document.createElement('input')
    const descriptionInput = document.createElement('input')
    const button = document.createElement('button')


    monsterForm.id = 'monster-form'
    nameInput.id = 'name'
    ageInput.id = 'age'
    descriptionInput.id = 'description'

    nameInput.placeholder = 'name...'
    ageInput.placeholder = 'age...'
    descriptionInput.placeholder = 'description...'

    button.innerHTML = 'Create'

    monsterForm.appendChild(nameInput)
    monsterForm.appendChild(ageInput)
    monsterForm.appendChild(descriptionInput)
    monsterForm.appendChild(button)
    document.getElementById('create-monster').appendChild(monsterForm)
    addSubmitEventListener();
  }


  const addSubmitEventListener = () => {
    document.querySelector('#monster-form').addEventListener('submit', (event) => {
      event.preventDefault();
      console.log("submitted", getFormData());
      postNewMonster(getFormData());
      clearForm();
    })
  }

  const getFormData = () => {
    let name = document.querySelector('#name')
    let age = document.querySelector('#age')
    let description = document.querySelector('#description')

    return {
      name: name.value,
      ageInput: age.value,
      description: description.value
    }
  }


  const postNewMonster = (data) => {
    let url = URL_PREFIX + `monsters`
    let options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log('new monster', json))
  }

  const clearForm = () => {
    document.querySelector('#monster-form').reset();
  }

  //VIEW 50 MONSTERS AT A TIME
    //create button element
    //attach 'changePage' evt listener to button that fetches the next 50
    //pageUp, pageDown functions for each button

  const addNavListeners = () => {
    let back = document.querySelector('#back')
    let forward = document.querySelector('#forward')

    back.addEventListener('click', () => {
      pageDown();
    })
    forward.addEventListener('click', () => {
      pageUp();
    })
  }

  const pageUp = () => {
    page++;
    getMonsters(page);
  }

  const pageDown = () => {
    if(page > 1){
      page--;
      getMonsters(page);
    } else {
      alert('Aint no monsters here')
    }
  }

const init = () => {
  getMonsters();
  createMonsterForm();
  addNavListeners();
}

document.addEventListener('DOMContentLoaded', init)
