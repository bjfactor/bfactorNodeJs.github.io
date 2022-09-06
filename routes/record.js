const express = require(`express`);
// const fs = require('fs');
const router = express.Router();

let data = [
    {id:1, title: 'Create a project', order:1, completed: true, author: 'Diego Laura'},
    {id:2, title: 'Take a coffee', order:2, completed: true, author: 'Laong-Laan'},
    {id:3, title: 'Write new article', order:4, completed: true, author: 'Agap-ito Bagumbayan'},
    {id:4, title: 'Walk toward home', order:4, completed:false, author: 'Taga-Ilog'},
    {id:5, title: 'have some dinner', order:5, completed:false, author: 'Dimas-Ilaw'},
];

//middleware to get data
router.get('/getData',(req, res)=>{
    // res.send(`<h1>Hello World</h1>`)
    res.status(200).send(data);
});

//middleware to route to different web pages
router.get('/home', function(req, res) {
    res.status(200).render('pages/home');
});

router.get('/about', function(req, res) {
    res.status(200).render('pages/about');
});


//middleware to post data
router.post('/postData',(req, res)=>{
    let body = req.body;
    // let param = req.params;
    console.log(req.body);
    data.push(body);
    // data.push(param);
    res.status(200).send(body);
    // res.status(200).send(param);
});

//middleware to get data per id
router.get('/getData/:id', (req,res)=> {
    let check = data.find((item)=>{
        return item.id === parseInt(req.params.id)
    });
    
    if(check) {
        res.status(201).json(check);
    } else {
        res.status(401).send('ID not found!');
    }
});


//router middlewear to rout to home page using fs
// router.get('/home', (req,res)=>{
//     //this 1st param will read the home.html file from the views folder
//     // the 2nd param will read the function with err & data param
//     fs.readFile('./views/pages/home.ejs', function(err,data) {
//         if(err) {
//             res.writeHead(404);
//             res.write('Whoops! File not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
// })

// middlewear to put/ edit and change data of an id
router.put('/update/:id', (req,res)=>{
    let id = +req.params.id; //same with let id = /update/:id
    let body = req.body;
    let index = data.findIndex((df)=>df.id === id);
    if (index >= 0) {
        let updateData = {id:id, ...body};
        data[index] = updateData;
        res.json(updateData);
        console.log(updateData);
    } else {
        res.status(404).send('Id does not exist');
    }
})

//middlewear to delete id
router.delete('/delete/:id', (req,res)=>{
    let id = +req.params.id;
    let index = data.findIndex((df) =>df.id === id);

    if(index >= 0) {
        data.splice(index, 1);
        res.status(200).send(`Data with ID: ${index} is Deleted`);
    } else {
        res.status(404).send('ID not found');
    }
})

module.exports = router;