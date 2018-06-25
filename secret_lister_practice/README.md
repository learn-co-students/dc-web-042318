# `TOP SECRET`
![Top Secret](http://www.kriegsfeldnp.com/misc_photos/TSDem.jpg)

## Assignment
There is a threat to world peace. Someone has stolen all the code to make to-do lists in the browser and productivity is down across all non-developers in the world! We have faith in you, but we need you to follow the steps outline below carefully. **Your objective is to build a single to-do list application.** _Don't do anything to risk the mission._

## Technical Briefing
You will use your technical and creative ability to develop a front-end application which accomplishes these goals. We just need an MVP and your job is to build the following features on the front-end with persistence to the back-end:
  * Display all tasks
  * Add a task
  * Check a task as complete
  * Remove a task

### You will be given...
...a GitHub repository to clone down with some starter code with a base template to develop from. You can start by writing all of your code in `front-end/src/index.js`, but _as you refactor, you should create more files in the `front-end/src` directory_.

...a back-end already built out for you. To get the Rails server running, `cd` into the `secretlister` folder and run `bundle; rails db:migrate; rails s`. **There is no seeded data**. The routes available are as follows:

#### Get all tasks
```
# Request
GET   /tasks


# Response
[
  {
    "id": 1,
    "description": "Make a todo list",
    "priority": "high",
    "completed": false
  },
	{
		"id": 2,
		"description": "Save the world",
		"priority": "high",
		"completed": false
	},
  ...
]
```

#### Create a task
```
# Request
POST   /tasks

## Request Headers
Content-Type: application/json
Accept: application/json

## Request Body
{
  "description": "Make a todo app",
  "priority": "high"
}


# Response
{
	"id": 1,
	"description": "Make a todo app",
	"priority": "high",
	"completed": false
}
```

#### Edit a task
```
# Request
PATCH   /tasks/<task id>

## Request Headers
Content-Type: application/json
Accept: application/json

## Request Body
{
  "completed": "true"
}


# Response
{
	"id": 1,
	"description": "Make a todo app",
	"priority": "high",
	"completed": true
}
```

#### Delete a task
```
# Request
DELETE   /tasks/<task id>

# Response
{
 /* Empty response */
}
```
