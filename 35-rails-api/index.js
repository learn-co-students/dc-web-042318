console.log("included");

// Render cats on the page
// 1. fetch the cats index
function fetchCats() {
  return (
    fetch("http://localhost:3000/cats")
      // 2. parse the json
      .then(res => res.json())
      .then(json => json)
  );
}

function fetchCat(id) {
  return (
    fetch("http://localhost:3000/cats/" + id)
      // 2. parse the json
      .then(res => res.json())
      .then(json => json)
  );
}

function fetchHobby(id) {
  return (
    fetch("http://localhost:3000/hobbies/" + id)
      // 2. parse the json
      .then(res => res.json())
      .then(json => json)
  );
}

// 3. find the ul
function getUl() {
  return document.querySelector("ul");
}

// 4. iterate through the cats
function renderCats() {
  fetchCats().then(cats => {
    // console.log(cats);
    cats.forEach(cat => {
      console.log(cat.hobbies);
      let stringLi = createLiFromCat(cat);
      getUl().innerHTML += stringLi;
    });
  });
}

// 5. create an li
// 6. append them to the ul

const fluffer = {
  age: 5,
  breed: "Tabby",
  id: 1,
  name: "Fluffer",
  quote: "yowsas!"
};

function createLiFromCat(cat) {
  return `<li>${cat.name}, age: ${cat.age}, breed: ${cat.breed}</li>`;
}

document.addEventListener("DOMContentLoaded", renderCats);
