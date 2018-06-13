# Rails API

Dynamic pages with javascript
Single page application

## What? Why?

We want to respond to requests for data with data
(Usually, we want to format that data as json)
Still to want to access our database
Use the relationships between our models
Update our models / database rows

## Client Side
fetch

### CORS
Cross Origin Resource Sharing

Rails is so nice
uncomment rack-cors in Gemfile + the initializer and things work again!
(set the origin to `*`)

## 'Server' Side
json-server - pretends to be a server (does CRUD)
we want the full power of Rails!

## rails new --api

What's changed?
Instead of rendering erb by default in a controller action,
  ~rails will error when it reaches the end~
  render 204 no content


Still RESTful!!

GET /cats - index (list all the cats)
```json
{"cats": [{
  "id": 1,
  "name": "Fluffer",
  }]}
```

GET /cats/:id - show
POST /cats - create
...


## Problems
1. have to map through objects, create hashes
2. we don't have associated data

## Serializer

Define a way to serialize rails ActiveModels

## Note: fetch

Does not catch 404!

## Associated data

use has_many in the Serializer, it will fetch through


## N + 1 Queries

Don't!
(fix with includes)
