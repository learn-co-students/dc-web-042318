# Boozer React Mini-Project

We have provided you with a Rails backend found here:
https://github.com/learn-co-curriculum/boozer-api-web-0716

We'll be building the React frontend from scratch using an awesome tool from facebook to bootstrap our app called `create-react-app`. To use it, first, install the package globally (for CLI tools, we usually install npm packages in a global location)

```bash
npm install -g create-react-app
```

Next, we'll create our application.

```bash
create-react-app boozer-react
```

## This will create a new app in the directory where you run the command. Simple!

Here is an example of what an MVP might look like, there is plenty of room to expand this project and go beyond what is shown here:

![Boozer](Boozer.gif)

### Instructions

1.  Using `create-react-app`, create a new project called `boozer`.

2.  We've provided you with an API. Fork and clone the api, then run `rake db:migrate` and `rake db:seed`. We have two endpoints right now: `/api/v1/cocktails` renders out a list of cocktails. `/api/v1/cocktails/:id` provides some more information about a specific cocktail, including it's ingredients and proportions. Our domain model is that cocktail has many proportions and has many ingredients through those proportions.

* Do these endpoints work?

3.  Our goal is to have a "Master-Detail" layout - our list should be ever-present on the left side and our detail view should take up two thirds of the screen. Let's use Semantic UI React!!!

* gives components JavaScript
* easier than manually writing css styles

4.  Create a component called `CocktailsContainer`. This component should fetch a list of cocktails from the API and render out the cocktail names.

5.  Next, each cocktail name should be a clickable link. Clicking on this link should render out a detail view of the cocktail including the name, description, instructions, and proportions.

6.  As a user, I can filter the list of cocktails by name. This means I need a search input to enter in a name. Our list should then only show cocktails whose name matches.

### Part Two - Dynamic Form

Once you finish the above features, start implementing the user story below. **NOTE** You will have to add endpoints to the API to make these work properly.

As a user, I should be able to create a new cocktail. This means we will need a form where I can enter a cocktail name, description, instructions, and multiple proportions. _The form should be dynamic_ - I should be able to choose how many different proportions I want to add.

_Clarification on the Domain: An **Ingredient** is a record that indicates, for example, "Mint Leaves" or "Bitters" is something that many cocktails may have. A **Proportion** is a join table where each record indicates, a specific cocktail, is made with a specific ingredient, with a certain amount. For example, a Mojito is made with 4-5 mint leaves._

This is a pretty tough task. Think through what adding multiple fields to your form means for the state of your React Component that renders the form. You will need to dynamically update the amount of ingredient fields.

**NOTE** - there is a lot of functionality tied up in this one user story. You probably need to break this one up into multiple stories. Focus on small pieces of work at a time. First, maybe you want to make a form that just has a user enter in a cocktail name? Then let the user submit that form? Then add a hard-coded number of proportions? Build in small chunks and don't worry about edge cases to start. Pretend that the user will do everything perfectly.

### Additional Features to try

1.  As a user, I can rate cocktails or leave comments.
2.  Use react-router-dom to update the URL as you click on each particular cocktail.
