API URL: https://mockup-api.herokuapp.com

# **AUTHENTICATION**

## **SIGN IN**

*POST: /auth/signin*

*Headers:*

* Content-Type: `application/json`

*Request body:*

* email: `String`
* password: `String`


## **SIGN UP**

*POST: /auth/signup*

*Headers:*

* Content-Type: `application/json`

*Request body:*

* email: `String`
* password: `String`
* password_confirmation: `String`

# **Todos**

## **GET ALL TODOS**

*GET: /api/v1/todos*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* page: `String`
* limit: `String`

## **SEARCH TODOS**

*GET: /api/v1/todos/search*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* q: `String`
* page: `String`
* limit: `String`

## **GET TODO BY ID**

*GET: /api/v1/todos/:id*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* id: `String`

## **CREATE TODO**

*POST: /api/v1/todos*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Request body:*

* title: `String`

## **UPDATE TODO**

*PUT: /api/v1/todos/:id*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* id: `String`

*Request body:*

* title: `String`

## **DELETE TODO**

*DELETE: /api/v1/todos/:id*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* id: `String`

# **ITEMS**

## **GET ALL ITEMS OF SPECIFY TODO**

*GET: /api/v1/todos/:todo_id/items*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* todo_id: `String`

## **GET ITEM BY ID**

*GET: /api/v1/todos/:todo_id/items/:id*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* todo_id: `String`
* id: `String`

## **CREATE ITEM FOR SPECIFY TODO**

*POST: /api/v1/todos/:todo_id/items*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* todo_id: `String`

*Request body:*

* title: `String`

## **UPDATE ITEM FOR SPECIFY TODO**

*PUT: /api/v1/todos/:todo_id/items/:id*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* todo_id: `String`
* id: `String`

*Request body:*

* title: `String`

## **DELETE ITEM OF SPECIFY TODO**

*DELETE: /api/v1/todos/:todo_id/items/:id*

*Headers:*

* Authorization: `token`
* Content-Type: `application/json`

*Query string:*

* todo_id: `String`
* id: `String`
