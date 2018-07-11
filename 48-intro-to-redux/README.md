# Intro to Redux

## Problems with React

- Deciding where to store state
  - don't want to rerender _everything_ when it doesn't need to
  - need that state to be available
  - DRY
- Pass props (data) down through multiple levels of components
- Pass props (functions) down, call them from far 'below'
- Deciding when and where to (fetch, load from localstorage, store state)
- Refactoring is hard!
  - When you want to add feature, you sometimes have to move state between components
- Fetching on the fly - timing questions, particularly with async actions


- Components repeated (shared functionality between components?)
  - Should have been a way to reuse similar pieces, customizable
- Events needed to be processed in parent component (forms, etc)
  - feels weird that parent knows so much about the child event
    - violation of isolation (encapsulation) / Law of Demeter

- APIs
- Styling
- Rendering error messages, catching errors
  - not getting error messages when you wanted them / had a bug

## Redux

* https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6
* https://redux.js.org/basics/actions

### Store

Where all of your redux state lives
is an object

methods:
 - getState: returns the current state of the store
 - dispatch: send an action to the store, reducer will use to update the store

Uses the reducer to update the state every time an action is dispatched

### Reducers

function
decides how to update the state

state, action -> state

should not mutate the old state!
should be pure functions!

- might want to go back to the old state
- like setState, might want to compare the old state and the new state (i.e. to check whether it changed)
- reduce possibility of errors
- dispatch is asynchronous (doesn't happen immediately)

### Actions

Required!
Object with a property 'type' that is a string

also can have anything else that you want in the action!
- added the amount
- could pass a function

## Problems

How do we structure the store? Does it get its own file? Reducer?

One giant reducer function
  - super messy
  - we want to separate it into smaller pieces

Component does not rerender when store state is updated
  - it would be cool if store state was a prop to our component
  - like to remove our bad hack

## react-redux
## combineReducers
