# Intro to ORMs

## Objectives

1.  Understand how Ruby programs can use SQL
2.  Set up a Ruby environment
3.  Execute SQL from Ruby code
4.  Connect Ruby models to database tables (build CRUD methods for a Ruby class)

### CRUD in SQL - Review

CRUD in SQLs

* Create
  `INSERT INTO table_name(column, col) VALUES (actual values )`
* Read
  `SELECT columns FROM table...`
* Update
  `UPDATE table_name SET column_name = (value) WHERE id = (some id);`
* Delete (Destroy)
  `DELETE FROM table_name WHERE ...`

## Executing SQL from Ruby

What are the ways we can run this sql?

```SQL
CREATE TABLE IF NOT EXISTS fans(id INTEGER PRIMARY KEY, artistId INTEGER);
```

* sqlite3 CLI - Command Line Interface
* read sql from a file
* send sql statements from ruby

How do we run this sql from Ruby?

Setup a connection to sqlite3 process using the gem
Do this in our environment file.

## Setting up our environment

* What is a Gemfile?
* What is console.rb for?
* What is our 'environment'?
* What is our environment file for?
* How do we load the code for our models?
* How do we get a database connection?

## Connecting Ruby classes to SQL tables

Let's look at the `Artist` class in `artist.rb`

What _class methods_ do we want?
What _instance methods_ do we want?

Create
Read
Update
Destroy
