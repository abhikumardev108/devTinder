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


- video --> 20. Diving into the APIs.
-
- Diffence between js v/s JSON.
- add the express.json() middleware to app.
- make your /signup API dynamaic to receive the data from the end user.
- User.findOne with duplicate emailId, then which object return ? . find it
- API - get user by email
- API - Feed API - GET /feed - get all the user from the database.
- API - get user by ID.
- Create a DELETE "/user" API.
- Create a update user API.
- Difference between patch and put
- Explore the mongoose documentatiion specifically, models.
- What are options in a Model.findOneAndUpdate methods, explore more about it.
- Create an API - to update an user with emailId.
-
-
-
- video 21. --> 

- Explore the schematypes options from the documentaion.
- add required, unique, lowercase, min, max, minLength, trim, 
- Add default value
- Create a custom validation function for gender.
- Improve the DB schema -> Put all the appropriate validation on each field in the schema.
- Add timestamps to the userSchema.
- Add API level validation on a PATCH request and /signup POST API.
- Data Sanitation -> Add API validation for each field.
- Install validator 
- Explore the validator library function and use the validator for password, emailId, phone, photoURL... and many more.
- NEVER EVER in your life trust --> "req.body" --> means user, they can enter any data.
-
-
-
- video 22. -> Encrypting password.
-
- Validate data in /signup API.
- Install bcrypt package.
- Create a passwordHash using bcrypt.hash and save the user with encrypted password.
- Create  /login API.
- Compare password and through error if email or password is wrong.
-
-
-
-
-
- video 23. -> 
- 
- install cookie-parser
- just send a dummy cookie to user
- create GEt /profile API and check if you get the cookie back
- install jsonwebtoken
- In login API, after email and password validation, create a JWT token and send it to user cookie.
- read the cookie inside your profile API and find the logged in user.
- write the userAuth middleware.
- Add the userAuth middleware in the /profile API and a new sendConnectionRequest API.
- Set the expiry of JWT token and cookies of 7 days.
-
-
-
-
-
-
-
-
-
-
-
-
-
-




