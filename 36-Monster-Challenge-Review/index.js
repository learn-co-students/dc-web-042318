//todo:
// add monsters to dom
  //create element for monsters
  //append relevant information
  //attach monsters to dom
  const localHost = 'http://localhost:3000'
  const monsterContainer = document.getElementById('monster-container');
  const createMonster = document.getElementById('create-monster');
  const fragment = document.createDocumentFragment();
  let page = 1

  const getMonsters = (page) => {

    fetch(localHost + `/monsters/?_limit=50&_page=${page}`)
      .then(res => res.json())
      .then(data => {
        while(monsterContainer.firstChild) {
          monsterContainer.removeChild(monsterContainer.firstChild)
        }
        console.log('data -', data);
        for(let i = 0; i < data.length; i++) {
          createMonsterCard(data[i])
        }
    })
  }

  const createMonsterCard = (monster) => {
    const name = document.createElement('h3')
    const age = document.createElement('h4')
    const bio = document.createElement('p')
    name.innerHTML = `${monster.id}. ${monster.name}`
    age.innerHTML = `Age: ${monster.age}`
    bio.innerHTML = `Bio: ${monster.description}`

    fragment.appendChild(name)
    fragment.appendChild(age)
    fragment.appendChild(bio)

    monsterContainer.appendChild(fragment)
  }

  //add a new monster
  //create form elements
  //capture data from form
  //fetch post request
  //render new monster at top(?)

  //grab input values
  //return new monster data from form in an object

  //send form data through submit evt listener

  //fetch request to post new monster

  const createMonsterForm = () => {
    const form = document.createElement('form');
    const nameInput = document.createElement('input');
    const ageInput = document.createElement('input');
    const bioInput = document.createElement('input');
    const submit = document.createElement('button');

    nameInput.id = 'name';
    nameInput.placeholder = 'name...';

    ageInput.id = 'age'
    ageInput.placeholder = 'age...'

    bioInput.id = 'bio'
    bioInput.placeholder = 'bio...'

    submit.id = 'create-btn'
    submit.innerHTML = 'Create'

    form.appendChild(nameInput)
    form.appendChild(ageInput)
    form.appendChild(bioInput)
    form.appendChild(submit)

    createMonster.appendChild(form)
  }

  const getFormData = () => {
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    let bio = document.getElementById('bio')

    let data = {
      name: name.value,
      age: parseInt(age.value),
      bio: bio.value
    }
    return data;
  }

  const sendFormData = () => {
    createMonster.addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = getFormData();
      console.log('formData', formData);
      postMonster(formData)
    })
  }

  const postMonster = (monster) => {
    let url = localHost + "/monsters";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(monster)
    }

    fetch(url, options)
      .then(res => res.json())
      .then(monster => {
        console.log("monster", monster);
        alert(`New monster created: ${monster.id}`)
      })
  }


//view next 50 monsters
  //create button element
  //attach 'changePage' evt listener to button that fetches the next 50
  //pageUp, pageDown functions for each button

  const addPageChangeListeners = () => {
    let backBtn = document.getElementById('back')
    let forwardBtn = document.getElementById('forward')

    backBtn.addEventListener('click', () => {
      pageDown();
    })
    forwardBtn.addEventListener('click', () => {
      pageUp();
    })
  }

  const pageUp = () => {
    page++
    getMonsters(page);
  }

  const pageDown = () => {
    if(page > 1) {
      page--
      getMonsters(page)
    } else {
      alert("You're at the beginning!")
    }
  }


function init() {
   getMonsters(page);
   createMonsterForm();
   sendFormData();
   addPageChangeListeners();
}

document.addEventListener('DOMContentLoaded', init)
