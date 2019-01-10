/*1.连接数据库*/
const mongoose = require('mongoose');
/*连接本地test数据库*/
mongoose.connect('mongodb://localhost/test');
/*2.设计表结构*/
const Schema=mongoose.Schema;
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    email:{
        type:String
    }
})
/*3.使用表结构,创建数据表user*/
const User=mongoose.model("user",userSchema);
/*4.操作数据库---添加数据*/
const admin=new User({username:"张三",password:123456})
/*5.数据持久化*/
admin.save(function (err,ret) {
    if (err){
        console.log("数据持久化失败")
    } else {
        console.log("数据存储成功")
    }
})