const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const blogSchema = new Schema({ // create a variable type mongoose.Schema
    title:{                     // has a title type String, a short type String and a long type String
        type: String,
        require: true
    },
    short:{
        type: String,
        require: true 
    },
    long:{
        type: String,
        require: true 
    }
}, {timestamps: true})         // oto save

const Blog = mongoose.model('Blog', blogSchema) // crate a pattern name is Blog and type is blogSchema
module.exports = Blog // send Blog