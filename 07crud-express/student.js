const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/test",{useNewUrlParser: true})
const Schema=mongoose.Schema
const studentSchema=new Schema({
    name:{type:String,required:true},
    gender:{type:Number,required:true},
    age:{type:Number,required:true},
    hobbies:{type:String,required:true},
},{versionKey: false})
var students=mongoose.model("students",studentSchema)
module.exports=students;