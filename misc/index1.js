//Express - small framework that works on top of Node.js web server functionality to simplify its APIs and helpful new features.
//Frameworks are software that are developed and used by developers to build applications.

//Step 1. Importing express
const express = require(`express`); 

//Importing body-parser
//body-parser - converts text sent thourgh HTTP request to a target format. 
const bodyParser = require('body-parser'); 

//Importing modules record from folder routes.
const routes = require('./routes/record');

//Step 2. Creating new express app
const app = express();

//IMPORTANT: What is middleware? Middleware functions are FUNCTIONS that executes BETWEEN the request and response.
//THINK OUTSIDE THE BOX: Let's compare MIDDLEWARE FUNCTIONS like WAITERS. If you order food in the restaurant, the waiter will act as the middle-man between you as the customer and the kitchen. If the food you want is available, the waiter will serve the food but if the food is not available, the waiter will inform you that the food is not available. Just like Middleware functions, we invoke them in the script to executes the request and response.  

//app.use() is example of APPLICATION LEVEL MIDDLEWEAR.
//express.json() is example of built-in middlewear function inside Express. It parses incoming JSON requests and puts the parsed data in the req.body.
//basically it tells to use the middleware the only parses JSON.
//THINK OUTSIDE THE BOX: This is like ordering food to the waiter (app.use()), you asked the waiter for the menu (express), and ordered fried chicken (json).
app.use(express.json());


//parse incoming request to body to JSON using the app.use middlewear.
//basically it tells to use the bodyParser to parse the incoming request to body to JSON format.
//THINK OUTSIDE THE BOX: Now you have ordered fried chicken to the waiter but your don't know how will it be serve and you don't know how you will eat that. You will now tell the waiter to SERVE IT IN A PLATE (body-parser) in order to eat that. 
app.use(bodyParser.json()); 

//parse application/x-www-form-urlencoded using the app.use middlewear.
//basically it tells to use the bodyParse t oparse the incoming request encoded in the url.
//THINK OUTSIDE THE BOX: Aside from serving the fried chicken in a plate, you also told the waiter to serve fried chicken in a paper box.
app.use(bodyParser.urlencoded({extended: true}));

//basically this tells to use the path /record to connect to router.
//THINK OUTSIDE THE BOX: You have ordered the fried chicken to the waiter, and inorder to serve that the waiter tells you to pay it first. The waiter will tell and route you to pay at the cashier. The waiter again is the (app.use) white the '/record is the cashier.
app.use('/record', routes);


//Step 3. Port Configuration
const port = 8080;

//Step 4. Server listening to requests
app.listen(port, ()=>{
    console.log(`The server is now running in the port: ${port}`);
})