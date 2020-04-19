# Chuck Norris Jokes App
This is a single Page App builtwith react and chucknorris api which generated a random joke for a selected categorie.


This App is Structured into two parts It have Server side and client side.

Server:

1. It have Apollo GraphQL API
2. GraphQL API wraps [ChuckNorris.io](https://api.chucknorris.io/) API
3. GraphQL API have a Query type that resolves all Categories ([https://api.chucknorris.io/jokes/categories](https://api.chucknorris.io/jokes/categories))
4. GraphQL API have a Query type that resolves a random joke given a Category as an argument ([https://api.chucknorris.io/jokes/random?category={category}](https://api.chucknorris.io/jokes/random?category=%7Bcategory%7D))

Client:

1.  Is a Single Page App (SPA) 
2.  SPA consume the above GraphQL API 
3.  SPA have a home page with a list of categories 
4. When a category is clicked, the category detail (a random joke) is displayed


### How this App now your locally:

``Start graphql server(localhost:8000): npm run server ``
\
``Start client server(localhost:3000): npm run start``

`` To run both server and client server(localhost:3000): npn run dev ``

`` To run Test : npn run test``

#### App Demo: 

[Chuck Norris App](https://frozen-thicket-53665.herokuapp.com/) 


