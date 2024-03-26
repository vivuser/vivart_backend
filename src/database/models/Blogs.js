const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: { type: String, required: true },
  userId: { type: String, required: true },
  text:{ type: String, required:true },
  createdAt: {type: Date, default: Date.now },
  replies: { type: Array},
 }) 

const blogSchema = new mongoose.Schema({
    author: { type: String, required: true },
     title: { type: String, required: true },
   content: { type: String, required: true },
    userId: {type: String, required: true},
    blogId: {type: String, required: true},
    tags: {type: String},
    comment: [commentSchema],
    imageUrl: { type:String},
    views: { type: Number, default: 0 }
})

blogSchema.index({ title: 'text', content: 'text'})

module.exports = mongoose.model('Blog', blogSchema)