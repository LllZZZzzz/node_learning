/*使用node-http插件进行通讯*/
var http=require("http");
/*使用url插件解析url并且根据解析的结果进行下一步的判断*/
var url=require("url");
/*使用art-temppalte进行模板解析*/
var template=require("art-template");
/*使用fs读取文件*/
var fs=require("fs");
/*临时固定数据*/
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
/*创建服务*/
http.createServer(function(req,res){
	/*拿到请求的url并且封装成对象方便使用*/
	var parseObj=url.parse(req.url,true);
	var u=parseObj.pathname;
	/*url判断---如果为‘/’ 则返回index.html*/
	if(u=="/"){
		fs.readFile("./views/index.html", function(err,data){
			if(err){
				res.send("404 NOT FOUND！")
			}else {
				var tp=template.render(data.toString(),{
						comments:comments
				})
				res.end(tp);
			}
		});
	}
	/*---如果是以public开头的路径,请求公共资源*/
	else if(u.indexOf("/public")==0){
		fs.readFile("."+u,function(err,data){
			if(err){
				res.end("404 NOT FOUND");
			}else{
				res.end(data);
			}
		})
	}
	/*---如果路径是post,进入发表页面*/
	else if(u=="/post"){
		fs.readFile("./views/post.html",function(err,data){
			if(err){
				res.end("404 NOT FOUND !");
			}
			else{
				res.end(data);
			}
		})
	}
	/*---如果路径是pinglun,则添加提交的评论并且重定向*/
	else if(u=="/pinglun"){
		var comment=parseObj.query;
		comment.dateTime="2018-11-27";
		comments.push(comment);
		res.statusCode=302;
		/*location告诉浏览器重定向的位置*/
		res.setHeader("Location","/");
		res.end();
	}
	/*其余情况报错*/
	else{
		fs.readFile("./views/404.html",function(err,data){
			if(err){
				res.end("404 NOT FOUND !");
			}else{
				res.end(data);
			}
		})
	}
})
/*端口监听*/
.listen(3001,function(){
	console.log('我打开了');
});