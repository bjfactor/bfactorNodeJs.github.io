//import
const express = require(`express`); 
const bodyParser = require('body-parser'); 

const routes = require('./routes/record');
const app = express();

//middlewear
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/record', routes);


// set the view engine to ejs
app.set('view engine', 'ejs');

const port = 8080;
app.listen(port, ()=>{
    console.log(`The server is now running in the port: ${port}`);
})





