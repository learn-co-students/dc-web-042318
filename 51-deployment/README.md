# Deployment

Goals:
- Request Response Cycle
- New Parts!
  - Domain Name Resolution
  - Servers
- Scaling
- Deploying
- Production Services

## Review: Request Response Cycle

Client makes a request to the server for some information
  - HTTP request (GET, POST, ...)

1. Domain Name Resolution
  google.com => 216.58.218.238

*  asks local 'router' ({ google.com => 216.58.218.238, facebook.com => 31.13.69.228 })
*  'root' of the tree - root nameserver
*  answer the question: what IP address should this name resolve to?
*  use 'name records'
*  CNAME
*  A Name
*  MX records
*  Expiration - 15 minutes, 1 year

2. IP - route the packets  (not something you have to think about)
  IP address IPv4 IPv6 (345f:34d3:345f:34d3)
  127.0.0.1 - localhost
  0.0.0.0

  [ black box ]

Server sends a response to the request (HTTP response)
  - status (200 ok, 301 redirect, 404 not found)
  - body (html of the page, json)

Page loaded by the browser
Data gets used by the client application

So far, client and server on the same machine.


*Goal: Application accessible to the internet!*
- setup some name to point to our computer
 ngrok
  - serve from your computer
  - very temporary

- run our code on some computer that doesn't shut down
- also, has other characteristics that make it good for serving web apps

*'Cloud Providers'*
* AWS
* Google Cloud
* Azure
* Heroku
* Digital Ocean
* Linode
* ...

* Application on some machines
* Database on another machine
* Servers should know how to reach the database


## Scale?

* Run your code on lots of computers (Horizontal Scaling)
* Run your code on fast computers (Vertical Scaling)

* (smallest is often given away for free)

* Load Balancer balances the load
   - routes requests to different application servers based on 'health'

* Cache - save some results for later
  * Short lived database

## What's new?
- DNS
- Load Balancer
- Services (database, cache, etc.)

- Environments
  - Control with 'environment variables'
  - key/val pairs loaded onto some machine
  not in your code

Control differences between different 'Environments'
  - what url to fetch?
  - what database to connect to?
  - do different things with errors
  - might not actually hit external service
  - ...

Frontend changes
  - faster,
  - error display
  - remove development features

Environments
* Development - local (i.e. your computer)
* Test - local testing
  - Continuous Integration / way to run your tests before deploying new code
  - lots of services to do this

* Production
  * (Staging) - pretend deployment environment
  users don't see it, but otherwise, basically the same as production

- Deployment Pipeline
  - list of tasks to do in order before your can run
    - running the tests
    - 'building' the application (bundle install, npm run build)
    - spin up the servers
    - swap the computers that the public version is pointing to
  - 'buildpack' in heroku-speak

- Secrets
  - tokens for external apis
  - application secrets (used for authentication)

## Heroku

deploy with git!
auto detect how to run the application

## But... how do we deploy the frontend?

- build our frontend assets (bundle, styles, images)
- serve these assets?
- push to github pages
- serves static files

Monorepo
  - 'single repository'
  - build and serve your javascript app from your rails app
  - part of the build process is to bundle your frontend
  - include your js bundle on some rails rendered page
  - serve statically or render erb
  - '/'

Microservices
  - two services
  - deploy a separate service to serve your react app
  - lots of simple static file servers that work
  - point your client at the server
  - cors configured
    - `*`
    - 'frontend.com'

domain names
  - buy name from some hosting service
  - add the name records to point to the ip address of your server

## Steps to deploy

### Method 1: Rails on Heroku, React on Now

Part the first. In which we prepare the Rails App for deployment

Part the second. In which we create the heroku app and deploy.

Part the third. In which we prepare the React app for deployment.

Part the fourth. In which we create the now app and deploy.

### Method 2: Rails on Heroku, React *gasp* served from Rails

### Method 3: Rails on Heroku, React on (Surge, Netlify, Gh-pages...)

Follow the Rails steps from Method 1, then Choose Your Own Adventure to deploy your React app with another service.

### Method 4: Manual Mode Rails + React (on Digital Ocean, AWS, Linode, etc)

This is hard, but you can do it! Instead of getting a service to do your dirty work for you, just run commands on a computer, and point the domain at it!

## Heroku Tips

`heroku console` - get a console in production
`heroku run rake db:migrate:status` - run `rake db:migrate:status` in your production environment
`heroku logs` - see your log output
