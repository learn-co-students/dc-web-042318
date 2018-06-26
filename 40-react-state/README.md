# React State

React Context

inside of render, constructor, [lifecycle methods]
`this` is bound to the component

1. class component instead of a functional component
2. initialization in the constructor

```
this.state = {
  count: 0
}
```
3. don't change state directly, but instead use `setState`
4. `this.state` - an object


When state changes through setState, the component will rerender

We add event listeners as props!

Thinking in React
identifying state, where state should live, adding the state

## Questions
setState - can work in two ways - object, function
sometimes have to use arrow function because things are async
  object version sometimes doesn't work as you expect


Replaces eventlistener attach pattern for us
Maintain the data "state" of the application

## Component hierarchy
Can't pass props to our parents / siblings
Unidirectional Data Flow - props flow down

App - (whatever data it is going to pass as props to children) - filtered list of paintings - NOT state - needs to have the search term so that it can do the filtering
  Navbar - count (whatever data it is going to pass as props to SearchBar) - search term
    Searchbar - needs the search term
  PaintingsList - filtered list of paintings - receive as props, don't keep in state
    PaintingCard - needs one painting - still fine

## Search Feature
List of paintings - array of painting objects
search term - string
Filtered list of paintings - uses the search term

some component is going to filter the big list of paintings using the search term

## Designing state - the hard part

Helpful questions from the react docs on state

Goal is to minimize state that you are representing
Single source of truth

Simply ask three questions about each piece of data:

1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

Put state in the lowest parent possible


## Flow:

listener calls the function in searchbar
function passed from navbar
function passed from app

app updates

passes the new value down to navbar
navbar passes the new value to searchbar
search rerenders
