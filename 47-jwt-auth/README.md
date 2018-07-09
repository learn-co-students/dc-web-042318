# JWT Auth

- Explain the difference between Authentication vs. Authorization
- Authenticate via a basic controller action in Rails triggered by a fetch in React
- Store user data in state on login/signup
- Implement localStorage to store identifying information about a user in the browser (just a user ID for now)
- Automatically fetch user information based on contents of localStorage for already logged-in users

## Authentication vs. Authorization

Authentication
  Confirming who you are
  Identity

Authorization
  permission - based on who you are, what are you allowed to do?

  `current_user` - check role, access level

Rails mod 2 version - Authentication
bcrypt - password storage (hashed, salted passwords)
has_secure_password
/login route - accepts the username and password
check the username and password
start a session
send back a cookie with the session info

Rails mod 2 version - Authorization
  based on the session info
  before_action - check whether the user was 'Authorized' to access some resource
  either allow or respond with some error

Devise
CanCanCan

Access the sessions from React?
when we're using fetch, browser doesn't send the cookie for us (won't set the cookie for us)

```rails
  session[:user_id] = current_user.id # set an encrypted cookie
  # later
  session[:user_id] # read from the cookie
```

when we use fetch, cookies won't get set

We are responsible in javascript for supplying the authentication info

## Token Auth

send back a token as data

## JWT

advanced format for tokens

## JWT in Rails

Sign a JWT token in Rails

Send it to react app (when the react app sends the username and password)
React app will send it back (store it, send it with the request)
Rails can check it to ensure that it is valid
  can check the data inside, trust that Rails app originally created the data

Rails has a secret key
lock some information with that key
Read it again, trust that no one else can read it
Read it again, trust that no one else can tamper with it

## How to hide your secret key?

## Is React State secure?

in general _yes_
as safe as javascript executing in the browser

scrub your logs

## TODO

- Save token in React App
Where?
  localStorage

State
- component state?
- (App component?)
  -  pass it down to any component that needs
  - props.token (send with any fetch)
- localStorage
  - key value store
  - user refreshes - still around
  - one Storage per 'page' (host)

- Send token in requests
  get the item from localstorage
