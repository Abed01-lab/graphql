# Research GraphQL

## Table of Content

- [Research GraphQL](#research-graphql)
  - [Table of Content](#table-of-content)
  - [Assignment Questions](#assignment-questions)
    - [1. What is GraphQL, what is it used for, and why does it contain ‘graph’ in its title?](#1-what-is-graphql-what-is-it-used-for-and-why-does-it-contain-graph-in-its-title)
    - [2. Which known drawbacks of implementing API gateways in service integration could be resolved by GraphQL?](#2-which-known-drawbacks-of-implementing-api-gateways-in-service-integration-could-be-resolved-by-graphql)
    - [3. How does GraphQL compare to RESTful API and gRPC? Which are the appropriate use cases for implementing each of these technologies?](#3-how-does-graphql-compare-to-restful-api-and-grpc-which-are-the-appropriate-use-cases-for-implementing-each-of-these-technologies)
  - [How to start](#how-to-start)



----------

## Assignment Questions

### 1. What is GraphQL, what is it used for, and why does it contain ‘graph’ in its title?

GraphQL is a query language to be used by API’s, it provides a simple and easy way for querying data. 


Typically we see GraphQL be used in cases where we have a lot of data coming out of api’s and the clients wants to traverse this data in many ways


In simple terms the graph in graphQL makes it possible to customise the response object from the API. This happens with the queries which is defined in the type definitions for graphQL  

----------
### 2. Which known drawbacks of implementing API gateways in service integration could be resolved by GraphQL?

The reason why it would be a great fit for graphql to be implemented in an API gateway is because of how we build a response from multiple services. Lets say we have a user-service and a post-service, then we build the request in the resolvers and send one body back as response.  

In a normal API gateway that uses Restful, you would need to add more complexity to achieve the same result. 

Lets say we have a user. In a REST API we define a URI for the user example: “example.com/user/abedharirii@gmail.com”.

```json
{
		"email": "abedharirii@gmail.com",
    "firstname": "abed",
    "lastname": "hariri",
    "age": 321
}
```

So far so good, but what if we need the posts this user has then we need to create a URI like this: “example.com/user/aebdharirii@gmail.com?posts=true”

```json
{
	"email": "abedharirii@gmail.com",
  "firstname": "abed",
  "lastname": "hariri",
  "age": 321,
  "post": [
    {
      "message": "test",
      "date": "1669197748610",
      "likes": 300
    },
    {
      "message": "test",
      "date": "1669197749371",
      "likes": 300
    },
    {
      "message": "test",
      "date": "1669197750055",
      "likes": 300
    }
  ]
}
```

This is the standard way of developing as restful API, but there is a better way of doing it with GraphQL.

In graphQL we always point to the same URI “example.com/graphql”, the only thing that changes is the query we send to the API. For example if we want to get the user as we did with restful api we do it this way:

```ts
getUser(email: "test@email.com") {
    email
    firstname
    lastname
    age
  }
```

```json
{
  "data": {
    "getUser": {
      "email": "abedharirii@gmail.com",
      "firstname": "abed",
      "lastname": "hariri",
      "age": 321
    }
  }
}
```

As you can se we call a query called getUser and we give a parameter email, so the query knows we want the user with email 1.

If we want to see the people this users posts, then we only need to tell that to GraphQL by adding a attribute in the query called posts, and GraphQL does the rest. Example

```ts
getUser(email: "abedharirii@gmail.com") {
    email
    firstname
    lastname
    age
    post {
      message
      date
      likes
    }
  }
```

```json
{
  "data": {
    "getUser": {
      "email": "abedharirii@gmail.com",
      "firstname": "abed",
      "lastname": "hariri",
      "age": 321,
      "post": [
        {
          "message": "test",
          "date": "1669197748610",
          "likes": 300
        },
        {
          "message": "test",
          "date": "1669197749371",
          "likes": 300
        },
        {
          "message": "test",
          "date": "1669197750055",
          "likes": 300
        }
      ]
    }
  }
}
```

We did not change anything in the URI, we only asked for more data and we were give that extra data. This removes a lot of the complexity, we would add if we develop it in restful.

----------
### 3. How does GraphQL compare to RESTful API and gRPC? Which are the appropriate use cases for implementing each of these technologies?


GRPC is a good fit when there is a requirements for tip top performance. It has great performance thanks to its optimised binaries format rather than JSON. It works in the same way as graphQL where you specify the query and what that query returns

GraphQL is a good for cases where the requirements is a complex traversing of data and building different response bodies. GraphQL shines here because as a client you which data you need and leave the rest behind. This way the payload is smaller and therefore faster.

Restful has the biggest following out of the three API’ this makes restful attractive because it is easier to setup since a lot of developers knows it already. Caching is also one of the biggest pros when using REST since it uses HTTP caching.

----------

## How to start

If you use npm then replace yarn => npm

1. Clone the project
2. Run yarn
3. Run yarn db-update (Make  sure you have a .env file with variable DATABASE_URI set to your postgres URL)
4. Run yarn start
5. Visit localhost:4000
