setTimeout(function() {
  logHi();
  setTimeout(function() {
    logHi();
    setTimeout(logHi, 1000);
  }, 1000);
}, 1000);

// dothing1
// dothing2
// dothing3

// callback world

// get is a pretend method that does not exist
// get(url, (response) => {
//   response.parseJson((json) => {
//     console.log(json)
//   })
// });

fetch(url)
  .then(res => res.json())
  .then(json => console.log(json));

// return a promise that resolves after ms milliseconds
function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 5000) {
      reject("can't wait that long");
    }
    setTimeout(() => resolve(), ms);
  });
}

// function fetch() {
//   // create some request object
//   // send it to the internet
//   // return
//   return new Promise(resolve => resolve(new Reponse()))
// }

// does the .then have to go inside the parens?
wait(1500)
  .then(() => console.log("hiiii"))
  .then(() => wait(1500))
  .then(() => console.log("second"));

wait(1500)
  .then(() => console.log("hiiii"))
  .then(() => wait(1500).then(() => console.log("second")));
