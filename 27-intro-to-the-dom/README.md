# Intro to the DOM

## What is the DOM?

Document Object Model
 { key: value }  a.property

Object representation of the (elements that the browser knows about) (document)
An API for interacting with the browser's elements

Navigate using dot accessors
   window (root)
      |
   document
      |
     body
      |
    children
   |      |
  div     p

The DOM is a Tree
DOM Node

document.body.children[4].children[1].children[0].children[1].children

GROSS!!!
fix with finding methods

What IS document.body?
HTMLElements - DOM Node
- an object
- 'array' of children - not quite an array

## Querying and Finding

querySelector
  takes in a selector
  returns the first node that matches
  or null

'tagname'
'.class'
'#id'
'div .class'

getElementById
  takes an id string
  returns a node or null

getElementsByClassName
  takes NOT a selector (selector, some other string)
  takes a string with the class name
    or multiple classes space separated in the string
    order does not matter
  returns a collection of html elements that match
  sometimes collection is empty

### Methods
```js
node.querySelector('#unique-element')
node.querySelectorAll('.some-shared-class')
node.getElementsByTagName('body')[0]
node.getElementById('unique-element')
node.getElementsByClassName('some-shared-class')
```

## Manipulation

CRUD

change them
  attributes
    (hide)
    value
    class
    css
  children
    html

Remove elements!
Create and append (add new ones)

### Methods
  (manipulate attributes)
    `body.style.backgroundColor = 'red'`

  innerText - all of text from all of the children

  innerHTML - a string represntation of the children of the node
    content + tags
    includes the tags
    can change the element's children by assigning to a string

  textContent

  removeChild
    - removes the child
    - get back the child!
    - return value of the dom element removed

  createElement
    creates an element
    does not attach the element to the DOM

  appendChild
    attaches an element to the DOM
    can you attach a child twice?


## Challenges
https://en.wikipedia.org/wiki/Document_Object_Model

### Set 1
1. Select the element that contains the title, save it to a variable
2. Change the source of the DOM image to a picture of something else

https://media.giphy.com/media/BfFQeCJSNJcM8/giphy.gif

3. Delete the message box with the ?
4. Change the innerText of the title to some other DOM acronym
5. Change the text "From Wikipedia, the free encyclopedia" to "From [Your Name], a big ol' prankster"
6. Add a link to Google above the link to the wikipedia 'Main Page'

### Set 2
1. Change all the appearances of the string "DOM" to the acronym you used for the title
2. Replace all links in the "Contents" box to link to a video of Rick Astley
3. Change _every other_ section edit link into a `mailto:` link to `jimmy.wales@wikipedia.org`
4. Bonus (Hard): replace all `p` tags to `h2` tags, leaving the attributes and child elements alone (or copying them over)   

## Browser APIs

Bonus HW:
write a function that does the same thing as innerText
