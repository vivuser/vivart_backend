const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    author: { type: String, required: true },
     title: { type: String, required: true },
   content: { type: String, required: true },
    userId: {type: String, required: true},
    blogId: {}
})