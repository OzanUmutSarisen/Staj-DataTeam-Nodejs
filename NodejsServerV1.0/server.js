const express = require('express') // Nodejs web api library
const mongoose = require('mongoose') // MongoDB connect library
const userRouter = require("./routers/user") // nodejs file of pages which subpage on user page 
const Blog = require('./model/blogs')// nodejs file of pattern 

const app = express() // Nodejs web api

app.set('view engine', 'ejs') // determinet location of ejs file and ejs file is like html file

const dbUrl = "mongodb+srv://natsu:1234@cluster0.idnat.mongodb.net/?retryWrites=true&w=majority" // MongoDB connecting url
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }) // MongoDB connecting function


app.get('/', (req, res) => { // localhost 3000 adress page 
    console.log("Here")
    res.render('index', { text: 'world'}) // render ejs file or html both are same, send a data
})

app.get('/add', (req, res) => { // add page

    const blog = new Blog({ // create a type of blog so we send a variable like pattern
        title: "titleTry",
        short: "shortTry",
        long : "longTry"
    })

    blog.save() // save blog to mongodb
    res.render('Added data is '+blog)
})

app.get('/get', (req, res) => { // get page, get all data from database
    Blog.find()                 // we find all data like blog if we want to find one data we must use findById and we search id like {{ Blog.findById("54845196") }}
        .then((result) => { // result of find function
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})


app.use('/user', userRouter) // pages which subpage on user page. Here we determinet upper page 

app.listen(3000) // listen port 3000 we determine which port is have those pages (simple)