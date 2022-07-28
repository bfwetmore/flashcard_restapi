# Flashcard REST API

A rest API for flashcards based on Node.JS/Express, following the MVC pattern.\
\
Accesses a PostgreSQL Database using Sequelize ORM.

***

## Installation

#### To get started:

Step 1 : Clone the Repo

```
git clone https://github.com/bfwetmore/flashcard-REST-API.git
```

Step 2: cd into the cloned repo and run:

```
npm install
```

Step 3: Create a .env file

```
touch .env
```

Step 4: Input your credentials into the .env file. (No Curly Braces)

```
DBUSER={YOUR USERNAME}
DATABASE={DATABASE}
PASSWORD={YOUR PASSWORD}
```

Step 5: Start the API:

```
npm start
```

## Endpoints

If ran locally {host} would be localhost:3000 (don't use curly braces)

### Flashcards (GET):

* Get a Random Question:\
  ```{host}/api/randomquestion```
* Get an answer by ID:\
  ```{host}/api/answer/{ID}```
* Get flashcard object by ID:\
  ```{host}/api/flashcard/{ID}```

### User(POST):

User endpoints use POST methods. Must contain `username` & `password` key's
with desired values in the body.

* Create a User:\
  `{host}/api/createUser`
* Authenticate User:\
  `{host}/api/login`

## Author

---

* Benjamin Wetmore