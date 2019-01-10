/*bodyparse的引用一定要在配置express之前*/
var bodyParser=require('body-parser');
/*用express框架代替http*/
var express=require("express");
var app=express();
app.engine("html",require("express-art-template"));
/*配置body-parser 配置完成则在require请求对象上多一个属性body*/
/*body-parser配置解析post请求参数*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
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
];
app.get("/",function(req,res){
	res.render("index.html",{
		comments:comments
	});
});
/*开放共公路径*/
app.use("/public/",express.static("./public/"));
app.get("/post",function(req,res){
	res.render("post.html")
})
app.post("/pinglun",function(req,res){
	var comment=req.body;
	comment.dateTime="2018-11-27";
	comments.unshift(comment);
	res.statusCode=302;
	res.setHeader("Location","/");
	res.end();
});
app.get("/pinglun",function (req,res) {
    var comment=req.query;
    comment.dateTime="2018-10-05"
    comments.unshift(comment);
    res.statusCode=302;
    res.setHeader("Location","/");
    res.end();
});
app.listen(3000,function(){
	console.log('服务器开启')
})
