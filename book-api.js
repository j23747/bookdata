// importing

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const middlewareWrapper = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');


const app = express();
const port = 3000;


// Where we will keep our books

let books = [];

// utilizing CORS
app.use(cors());



// Configuring body parser middlewareWrapper

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/book', (req,res) => {
    const book = req.body;

    // output the book to the console for debugging
    res.send('Book is added to the Database');

});

app.listen(port, () => console.log('Hello World Listening on port ${port}!'))