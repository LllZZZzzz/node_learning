var express=require("express");
var bodyParser = require('body-parser')
var app=express();
/*配置使用template 默认在views中查找*/
app.engine("html",require("express-art-template"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]
/*这叫做params参数*/
app.get("/",function (req,res) {
    res.render("index.html",{
        comments:comments
    });
});
/*直接读出*/
app.use("/public/",express.static("./public/"),function (req,res) {});
/*app.use(express.static("./public/"),function (req,res) {
    res.end("//public")
});
app.use("/bieming/",express.static("./public/"),function (req,res) {
    res.end("//public")
});*/
/*这样可是使用不同的方法让一个路径使用多次*/
app.get("/post",function (req,res) {
    console.log(req)
    res.render("post.html")
});
/*post请求参数的处理*/
app.post("/pinglun",function (req,res) {
    var comment=req.body;
    comment.dataTime="2018-10-05"
    comments.unshift(comment);
    /*重定向*/
    res.render("index.html",{
        comments:comments
    });
});
app.get("/pinglun",function (req,res) {
    var comment=req.query;
    comment.dataTime="2018-10-05"
    comments.unshift(comment);
    /*重定向*/
    res.render("index.html",{
        comments:comments
    });
});
app.listen(3000,function () {
    console.log("服务器开启")
})
