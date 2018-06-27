# Thinking in React

* create-react-app
* Planning our state
* Planning our components
* Presentation and Container components


## Questions
passing down on___ props many levels
  not a function when attempting to invoke

differentiating reference vs. invokation
  how do we pass a reference to a function without invoking it, with some data that we have?

What should go in state?

## Todo List

1. Start With A Mock
   Build a Component Heirarchy

2. Build a static version in React
  check!

3. Thinking about our data

Can child components have state, state that is derived from the props they get?
  violates single source of truth
  if you can compute the data that you need, do
  keep state local if you can

  App - list of tasks, addTask (to pass to taskform)
    Navbar
    TaskForm - new content, addTask / handleSubmit
    TaskList - list of tasks - why a prop?
      TaskCard - single task

4. Adding the inverse data flow
