const express = require('express')
const router = express.Router()// express router function for it we can easily make more sub pages
const Blog = require('../model/blogs')// require a model, we use double '..' because we eant to exit subfile


router.get('/', (req, res) => {// upperpage of subpages
    res.send("MongoDB Page")
})

router.get('/add', (req, res) => { // add page
        
    const blog = new Blog({ // create a type of blog so we send a variable like pattern
        title: "titleTry",
        short: "shortTry",
        long : "longTry"
    })

    blog.save() // save blog to mongodb
    res.render('Added data is '+blog)
})

router.get('/get', (req, res) => { // get page, get all data from database
    Blog.find()                 // we find all data like blog if we want to find one data we must use findById and we search id like {{ Blog.findById("54845196") }}
        .then((result) => { // result of find function
            res.send(result)
        })
        .catch((err) => {
            console.log("Not found data ",err)
        })
})

router.get('/update', (req, res) => { // update page, find a one data and update it then get these data
    //first we find a spacial data then we write what to want change in data
    Blog.findOneAndUpdate({"_id":"62f218b020e103877debb835"},{$set:{title:"titleTry3"}}, function(err,doc) {// if we want to find and update more than one we must use  findAndUpdate function
        if (err) { throw err; }
        else { console.log("Updated"); }
    })
    
    Blog.findOne({"_id":"62f218b020e103877debb835"})// then we write changed data
    .then((result) => { // result of find function
        res.send('Process is succsess '+result)
    })
    .catch((err) => {
        console.log("Not found data ",err)
    })
})

router.get('/delete', (req, res) => {// The delete data Page
    Blog.findOneAndDelete({"_id":"62f218b020e103877debb835"},function(err,doc) {// same like findOneAndUpdate if we want delete more than one use findAndDelete function
        if (err) {throw err; }
        else { res.send('Delete a data wich its id is "62f218b020e103877debb835" '); }
    })
    
})

module.exports = router // send router out