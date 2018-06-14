# JS Pokemon Search Assignment

## Objectives

* DOM Manipulation
* Events and Event Handlers
* Callbacks
* Constructors and Prototypes or ES6 Classes (For part two)

Hello, your assignment today is to re-create the functionality of our [Pokemon search engine](https://pokemon-search.netlify.com/).

p.s. Don't forget to include the ability to toggle the card image and reset the card image upon submission of a new search.

## Instructions

In order to run the local server, open your terminal and `npm i -g json-server`
When that completes, run `json-server --watch db.json`
As the command implies, `json-server` is going to spin up a server and will use `db.json` as its database.
We're using `json-server` so we can just focus on the frontend portion of this application. Eventually we can build out our own API but `json-server` is sufficient for testing purposes.

We're building out a search feature in our application (no backend persistence). A user should be able to search for a Pokemon and flip that Pokemon card to see the back side.

**Note** When creating constructors and prototypes, you may use ES6 classes or just create the constructor function separately. Your choice.

**If you want to challenge yourself, create an OO Solution in the `pokemon.js` file**

1.  The Pokemon class should be able to be called like: `new Pokemon(/* some arguments */)`
2.  Instances of Pokemon should have a method called 'render' that returns a string representing an `li` HTML element containing the Pokemon's name and image.
3.  Implement a filter functionality for your Pokemon list.
4.  Implement a flip functionality on each Pokemon.
