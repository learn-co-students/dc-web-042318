const url = "http://localhost:3000/characters";

function getCharacters() {
  // returns  a Promise for the actual characters data
  return fetch(url).then(res => res.json());
}

function listString(character) {
  return `<li data-id="${character.id}">${character.name}</li>`;
}

// Strategy: iterate through the returned characters
// call the listString on each character
// want to append this to the dom
// find the ul

function getCharacterListUl() {
  return document.querySelector("ul.character-list");
}

function loadListOfCharacters() {
  return getCharacters().then(characters =>
    characters.forEach(character => {
      let li = listString(character);
      getCharacterListUl().innerHTML += li;
    })
  );
}

function findListItems() {
  return document.querySelectorAll("li");
}

function getDetailViewDiv() {
  return document.querySelector(".detail-view");
}

// make the fetch request
// deal with the promise
// render the detail view x
function loadCharacterDetailView(characterId) {
  // console.log(characterId);
  // console.log(url + "/" + characterId);
  fetch(url + "/" + characterId)
    .then(res => res.json())
    .then(character => {
      let div = detailView(character);
      getDetailViewDiv().innerHTML = div;
    });
}

function attachEventListeners() {
  findListItems().forEach(item => {
    item.addEventListener("click", e => {
      // console.log(item.dataset.id);
      // console.log(e.target.dataset.id);
      loadCharacterDetailView(item.dataset.id);
    });
  });
}

// Viewing the detail view

// find the elements
// attach Event listener(s)
// which one did we click?

function detailView(character) {
  return `<div>
  <img src="${character.img}" />
  <h2>${character.name}</h2>
  <h3>of ${character.location}</h3>
  </div>`;
}

// Create a character

function getForm() {
  return document.querySelector("form");
}

// Create a new character
// X listen for the form submit
// X prevent default
// X get the form data
// X send a post request
// with the form data

function submitData(data) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" }
  });
}

function listenForFormSubmit() {
  getForm().addEventListener("submit", e => {
    e.preventDefault();
    submitData(getFormData());
  });
}

function getFormData() {
  let name = document.querySelector("#name").value;
  let location = document.querySelector("#location").value;
  let img = document.querySelector("#img").value;
  return { name, location, img };
}

document.addEventListener("DOMContentLoaded", function() {
  loadListOfCharacters().then(() => {
    attachEventListeners();
  });
  listenForFormSubmit();
});
