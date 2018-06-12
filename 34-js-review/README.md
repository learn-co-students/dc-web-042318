# JS Review

Q: DOMContentLoaded: structure so that the right things (adding event listeners, assigning elements to variables, defining functions) are loaded
A: write functions


Q: When to write functions with the function keyword vs. assigning an anonymous (arrow) function to const
A: matter of taste, some differences
Arrow Functions:
  - not hoisted
  - auto bound `this` to the same `this` as the lexical scope that they were defined in
Function keyword:
  - (function declaration) hoisted: functions are _known_ before we actually hit that line of code
  - not auto-bound
  - can be named

Q: What's the best way to select elements? (querySelector vs. getElement___)
A: querySelector ends up being familiar (weakness - code fragility)
  - ids are antipattern
  - js creates a global var with the id name

Q: Situations where we use promises other than fetch
A: lots, but we won't see them
  - Database access
  - file system access
  - browser apis
  - wait for some time to pass
  - write your own event listen and return promise methods as hw
  - control flow


Q: [fetch...] only supported by latest browsers (what happens when a user is on an older browser)
A: Check caniuse, support your users
   Polyfills like the fetch polyfill
   Browser transforms (transpilers) (Babel)


Q: When to use innerHTML vs. creating nodes and appending them as children
  - template strings & writing html by hand is hard, easy to break
  - if you are writing a library, code that needs to work, use the createElement pattern
  - but, for your own sake, for ease, use innerHTML
  - use innerText when you want to set the innerText

Refresher on class syntax
Q: How to organize DOM manipulation code (classes vs functions) which code has the responsibility?
  - do we create classes to handle dom manipulation?
A: classes responsibilities should 'make sense'
Check out metz book

Q: How to write relationships without using foreign keys (object relationships)
A: same as mod 1 before sql + activerecord

Q: button onClick vs. addEventListener('click')
A: not sure about what the differences are

- closures and iifes
