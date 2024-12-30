const { Schema, model } = require("mongoose");
 const commentschema= new Schema({
    content:{
        type: String,
        required: true

    },
    blogid:{
        type: Schema.Types.ObjectId,
        ref: "blog",
    },
    createdby:{
        type: Schema.Types.ObjectId,
        ref: "user",
    }
 },{timestamps:true})
const comment = model("comment",commentschema)
 module.exports = comment;