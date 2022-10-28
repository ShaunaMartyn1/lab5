const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//listens for URL (/3000) and HTTP get method
app.get('/', (req, res) => { //request and response
    res.send('Hello World!')
})
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Rep!')
})
//parameter:name in URL 
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})
//add a route point /api/books - array
app.get('/api/books', (req, res) => {

    const books = {
        "books": [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },

            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]
    }

    res.json({
        myBooks: books
    })
})
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html') //__dirname - get the current file you're in 
})
//listen for a get and a post
app.get('/name', (req, res) => {
    console.log(req.query.fname); //get first name 
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})
//listen for a get and a post
app.post('/name', (req, res)=> {
    console.log(req.body);
    res.send('Hello from Post' + req.body.fname + '' + req.body.lname);
})
//listens at host 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
