const express = require('express')
const Blog = require('../model/blogs')// require a model, we use double '..' because we eant to exit subfile
var bodyParser = require('body-parser')// a modul for to take post data part to part example if our json data has a "Name" key we can just take "Name" key value

const router = express.Router()// express router function for it we can easily make more sub pages

router.use(bodyParser.urlencoded({ extended: false }))// same sttings for good use actully I dont know what thise mean (search it)
router.use(bodyParser.json())// for use rotter

router.get('/', (req, res) => {// upperpage of subpages
    res.send("MongoDB Page")
})

router.post('/add', async(req, res) => { // add page

    const post = req.body
    const createdData = await Blog.create(post)
    res.json(createdData)
})

router.get('/getAll',async  (req, res) => { // get page, get all data from database
    try {
        const allBlogs = await Blog.find()
        res.json(allBlogs)
      } catch (error) {
        console.log(error)
      }

    /*    Blog.find()   type 2              // we find all data like blog if we want to find one data we must use findById function and we search id like {{ Blog.findById("54845196") }}
        .then((result) => { // result of find function
            res.json(result)
        })
        .catch((err) => {
            console.log("Not found data ",err)
        })*/
})

router.get('/getOne/:id',async (req, res) => {// get page, get all data from database
    try {
        const { id } = req.params// our id between "{}" because we take req.params just id otherways it return a objec
        const blog = await Blog.findById(id)
        res.json(blog)
      } catch (error) {
        console.log(error)
      }
    
    /*Blog.findOne({"_id":req.body._id})     type2            // we find all data like blog if we want to find one data we must use findById function and we search id like {{ Blog.findById("54845196") }}
        .then((result) => { // result of find function
            res.send(result)
        })
        .catch((err) => {
            console.log("Not found data ",err)
        })*/
})

router.put('/update/:id',async (req, res) => { // update page, find a one data and update it then get these data
    const { id } = req.params;
    const { title, short, long} = req.body;
    
    const updatedBlog = {title, short, long, _id: id};
    await Blog.findByIdAndUpdate(id, updatedBlog, {new:true});
    res.json(updatedBlog)
    
    //first we find a spacial data then we write what to want change in data type 2
    /*Blog.findOneAndUpdate({"_id":req.body._id},{$set:{title:req.body.title}}, function(err,doc) {// if we want to find and update more than one we must use  findAndUpdate function
        if (err) { throw err; }
        else { console.log("Updated"); }
    })
    
    Blog.findOne({"_id":req.body._id})// then we write changed data we can use findOneById
    .then((result) => { // result of find function
        res.send('Process is succsess '+result)
    })
    .catch((err) => {
        console.log("Not found data ",err)
    })*/
})

router.delete('/delete/:_id', (req, res) => {// The delete data Page
    Blog.findOneAndDelete({"_id":req.params},function(err,doc) {// same like findOneAndUpdate if we want delete more than one use findAndDelete function
        if (err) {throw err; }
        else { res.send('Delete a data wich its id is '+req.body._id); }
    })
    
})

module.exports = router // send router out