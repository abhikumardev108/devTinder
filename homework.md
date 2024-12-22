- for video no. 16 --> Creating our express server.

- create a repository
- Initialize the respository
- node_modules, package.json, package-lock.json
- Install express
- create a server
- listen to port 7777
- write request handlers for /test, / hello
- Install nodemon and update script inside package.json
- what are dependicies
- what is the use of "-g" while npm install
- Difference between caret and tilta (^ vs ~)




- for video no. 17 --> Routing and Request handler.

- initialize git --> git init
- ignore node_modules --> .gitignore
- create a remote repos on github
- push all code to remote origin
- play with the routes and extension like --> /hello, /hello/2, /test, /test/3, /xyz
- order of the router matters a lot.
- Install postman app and make workspace/collection and test api call.
- write logic to handle GET, POST, DELETE, PATCH API call and test them on postman.
- Explore differentes kinds of routing and use of ? , +, *, (), in the routes
- Use of regex in routes /a/, /.*fly$/, 
- Reading the query params in the routes.
- Reading the dynamic params in the routes.
-
-
-
-
- for video no. 18 --> Middlewares and error handlers.
-
- Play with multiple route handlers.
- next()   --> with play it also.
- next function and error along with res.send()
- app.use("/route", rh1, [rh2, rh3], rh4, rh5)
- What is middleware and why do we need it and create middleware and routing 
- How express js basically handles request behind the scenes.
- DIfference b/w --> app.use & app.all
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user routes except /user/login
- Error handling using --> app.use("/", (err,req,res,next) => {})  and try and catch block also.
-
-
-
-
-
- video 19. ---> Database, Schema & models mongoose.

- Create a cluster on the mongoDB official website. --> mongo atlas
- install mongoose library
- connect your application to the db (not the cluster) like "connection-url"/ devTinder
- call the connectDB() function and connect to db even before starting the application on the port_no 7000.
- Create a userSchema and then User model.
- Create POST /signup api to add data to database. and do also with some more experiment.
- Push some documents using api call from postman.
- Error handling using try, catch block.
-
-
-
-
-
-

