# Redux Thunk

## Redux

when we connect
props from parents still pass through
BUT mapStateToProps props will override the props from the parent

## Thunk

dispatch an action
do some async work
dispatch another action

multiple dispatches

dispatch a function as an action
  access to dispatch

## Let's build a redux app!


Components

App
  HogProfile
    ProfilePic
    Details
  Searchbar
  HogFeed
    HogPosts
  Chat
    Messages

State

CurrentUser
  Profile photo
  Profile info
Posts
SearchTerm

Messages
Login
PostCompose state
Which page we are on
