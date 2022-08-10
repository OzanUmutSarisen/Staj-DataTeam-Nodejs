const express = require('express') // Nodejs web api library
const mongoose = require('mongoose') // MongoDB connect library
const userRouter = require("./routers/user") // nodejs file of pages which subpage on user page 
const mongoDBRouter = require('./routers/mongoDB')

const dbUrl = "mongodb+srv://natsu:1234@cluster0.idnat.mongodb.net/?retryWrites=true&w=majority" // MongoDB connecting url
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }) // MongoDB connecting function
    .then(() => {
        const app = express() // Nodejs web api
        app.set('view engine', 'ejs') // determinet location of ejs file and ejs file is like html file

        app.get('/', (req, res) => { // localhost 3000 adress page 
            console.log("Here")
            res.render('index', { text: 'world'}) // render ejs file or html both are same, send a data
        })

        app.use('/mongoDB', mongoDBRouter) // pages which subpage on mongoDB page. Here we determinet upper page 
        app.use('/user', userRouter) // pages which subpage on user page. Here we determinet upper page 

        app.listen(3000) // listen port 3000 we determine which port is have those pages (simple)
    })
    .catch((err) =>{
        console.log("Connecting error ",err)
    })



