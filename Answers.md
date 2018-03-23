<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
   Middleware is some code that runs before the route; sessions is a persisted state in the request object holding relevant user info; bcrypt is middleware that handles data hashing; JWT is a client-side authentication token.
1.  What does bcrypt do in order to prevent attacks?
   It creates a hashing function that takes a certain amount of time to execute, using a SALT and the given password to create it. Bcrypt basically makes it costly to brute force a password attack.
1.  What are the three parts of the JSON Web Token?
   The header, the payload, and the server side authentication.
