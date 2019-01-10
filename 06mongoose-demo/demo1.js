const mongoose = require('mongoose');
/*连接本地test数据库*/
mongoose.connect('mongodb://localhost/test');
/*创建一个cats表*/
const Cat = mongoose.model('Cat', { name: String ,age:Number});

const kitty = new Cat({ name: 'dmm' ,age : 18});
/*
kitty.save().then(()=>{
    console.log("meow")
});*/
kitty.save(function (err,ret) {
    if (err){
        console.log("存储失败")
    } else {
        console.log("保存成功")
    }
})