# Fetch and Async

## Asynchronous code

Callbacks
 - loops run the Callbacks synchronously
 - event handlers / setTimeout / setInterval run code at some other point
 - passing a function to another function

What async have we seen before?
- event listeners
- setInterval
- setTimeout

Runs some other time
- we give up control of when the code is going to run

### Callback Hell

standard complaint

## Promises

syntax / pattern for solving callback hell

object representing a value in the future
method .then to register some behavior when the promise is 'resolved'

then method - register behavior for when promise resolves
  - gets the resolved value
  - gets the response
    (can pass second arg to handle errors, but prefer catch)
catch method - register behavior for when the promise 'rejects' or throws an error
  - gets the error passed in
  - handles errors in the promise chain

Promise.all
Promise.race
Promise.resolve

### Other things that return promises
load the dom
  other event listeners
user inputs

database access
  - db libraries support promises

fs - support promises

## Fetch

method for doing http stuff
returns a promise for the data

## Challenges

1. Fetch all the pokemon, log them to the console
2. Fetch all the pokemon, log just their names to the console
3. Fetch a pokemon by its id, log it to the console
4. Fetch a pokemon by its id, log the response's status to the console
5. Fetch a pokemon by its name, log it to the console.

6. Bonus: Create a new pokemon with a fetch
