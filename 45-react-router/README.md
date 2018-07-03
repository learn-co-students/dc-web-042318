# React Router

## Objectives

* Understand why routing is important and how it is different in React Router
* Set up React Router in a React App
* Go over BrowserRouter, Link, Route, and Switch.

## Routing in Rails vs. React

Static Routing
routes.rb - mapping urls -> controller actions
controllers - render views

Dynamic Routing
happening on the client

what shows on the page
what shows in the url bar

## Questions

How do we match a particular item?
Show page / detail view

Manual mode for updating the url?

How do Routes correspond to rails routes?
  - render the page whichever path matches
  - how do I run some ruby code when I click a link?
    - fetch from javascript
    - manual mode to update the url

## How does it work?

window.history

define some components
they will use history api to
  1. update the url / history when ...
  2. show particular components based on the url

## Using React Router

Goal:

Single page app
control page navigation from the client

Pages:

root
index / create - 'TaskForm', 'TaskList'
about - 'About'
login

detail view of a task + edit
task stats
...

## Components

1. BrowserRouter
  - mostly ignore
  - need in order to use the rest of react router
  - 'plumbing'

2. Route
  - renders the other component conditionally
  - based on what the url is, should I render?

  props: match, history, location
  history.push works like Link to

3. Link
  - links
  - change the url without a reload
  - rerender our components based on the updated url

4. Switch
  - switches
  - shows only one Route 'inside'
  - first one that matches
