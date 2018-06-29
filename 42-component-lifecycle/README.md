# Component Lifecycle

## Hooks

- git hooks
  - precommit
  - (post) push

- active record
  - validated
  - before_save
  - updated
  - destroyed

different times
(before, after) lifecycle point

- react lifecycle
  - mount - happens once
    - initial load
  - rendered - many times
  - unmount - once

## Methods
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- `componentDidMount()`
  - called once after component is first mounted to the DOM
  - initial fetch of data
  - set up timers
  - set up event listeners that aren't on your components, e.g. navigation events, window resize
  - do things that require the DOM component (attach a Chart or Map, read the position of the element)
  - return value ignored

- `componentWillUnmount()`
  - called before component is removed from the DOM
  - teardown and cleanup of anything set up in `componentDidMount`

- `render()`

- `componentDidUpdate()`
  - e.g. log the position of the DOM element on the page after render
  - called after update
  - gets result of `getSnapshotBeforeUpdate`
  - return value ignored


- `static getDerivedStateFromProps()`
  - best practice is to compute in render
  - usually violates single source of truth to have a component state initialized from props


- `getSnapshotBeforeUpdate()`
  - to collect some values (like a scroll position) before an update
  - result is passed as the third arg to `componentDidUpdate`

- `shouldComponentUpdate()`
  - decide whether or not to render
  - for performance, won't need to implement otherwise
  - benchmark first!

- `componentDidCatch()`
  - Used to set up error boundaries around children
  - Can display a fallback UI

## HW
implement (mod 3 practice / code challenge) in react
use `componentDidMount`
monsters, pokemon, image fetch, beers


## Deprecated Methods
Might see these, don't use them.

- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`
