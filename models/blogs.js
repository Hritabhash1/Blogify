const { Schema, model } = require("mongoose");
 const blogschema= new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required:true,
    },
    coverImageURL:{
        type: String,
        required:false,
    },
    createdby:{
        type: Schema.Types.ObjectId,
        ref: "user",
    }
 },{timestamps:true})
const blog = model("blog",blogschema)
 module.exports = blog;