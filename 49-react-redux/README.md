# React-redux

## Redux

* https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6
* https://redux.js.org/basics/actions

## Recap

Store
  - dispatch
  - getState

Actions
  - object
  - has a property 'type'

Reducer (handle actions)
  - pure function (no mutations or side effects!)
  - define the state changes
  - return a new state


We can still have state in our components!!!


## Problems

How do we structure the store? Does it get its own file? Reducer?

Component does not rerender when store state is updated
  - it would be cool if store state was a prop to our component
  - like to remove our bad hack

One giant reducer function
  - super messy
  - we want to separate it into smaller pieces

1. how do we fetch? (where)
2. how do we handle controlled components?
  - does the rest of the application depend on the state?

3. patterns around async in redux
  - redux-thunk


## react-redux

Connector library

pass the state of the store into components as props

### Provider
Plumbing
Set up once

### connect

'connect' our components to the react store

passing props into the component
deciding how to do that based on the function you pass in as an argument

// connect
// how does connect know to use the state from our store? (Provider)
// ((state) => props) => (component) => connectedComponent
// connected header will update whenever the store updates


### mapStateToProps

### mapDispatchToProps

## combineReducers
