# Event Listeners

So that we can handle user interaction
A way to 'register' behavior to happen when we get some user interaction

function 'addEventListener'
  - which event (string, name of the event)
  - callback function
    behavior gets 'registered' to happen whenever that event happens

    arguments?
    event itself - the only argument
    what happens to the return value?
      - nothing
      - return value gets ignored
      - want them for the side effects

    foreach - ignored the return value
    map - used the return value as the elements in the new array
    filter - decided whether to include the item at that index based on the truthiness of the return value

No longer in our control
Browser is keeping track of the function


Scope of the callback function?
   - follows the normal scope rules
   - closes over variables that are in scope when the function is defined

Load order issue
Possible fixes
  - put the script tag after the elements
  - listen for 'domcontentloaded' event

### Events
click
mousedown
mouseup
load
DOMContentLoaded


##  Events
Default Behavior
  preventDefault prevents default
Propagation
  stopPropagation stops propagation
  from children to their parents
  every parent gets a shot at handling the event

## Async
setTimeout
setInterval

## Other browser APIs

history
location
device characteristics
