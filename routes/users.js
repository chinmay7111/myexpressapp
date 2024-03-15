// to interact with mongo u need to 
// 1. install mongoose -> npm i mongoose



const mongoose = require('mongoose'); //1.

mongoose.connect("mongodb://127.0.0.1:27017/myexpress"); //2.crate db at mongodb of name myexpress


// 3. make a schema that define the structure of ur document
const userSchema=  mongoose.Schema({
  name:String,
  nickname: String,
  description: String,
  categories:{
    type:Array,
    default:[]
  },
  datecreated:{
    type: Date,
    default:Date.now()
  }
})

//4. the export the module u create using module() fun . module("collection_name u want", schema_name that u crated)
module.exports= mongoose.model("users",userSchema);
