var http=require("http")
var fs=require("fs")
var template=require("art-template")
var url=require("url")
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
http.createServer(function (req,res) {
    var parseObj=url.parse(req.url,true);
    var u=parseObj.pathname
    if (u=="/"){
        fs.readFile("./views/index.html",function (err,data) {
            if(err){
                res.end("404 NOT FOUND!")
            }else {
                var tp=template.render(data.toString(),{
                    comments:comments
                })
                res.end(tp)
            }
        })
        /*请求css img等资源*/
    }else if (u.indexOf("/public")==0) {
        fs.readFile("."+u,function (err,data) {
            if(err){
                res.end("404 NOT FOUND!")
            }else {
                res.end(data)
            }
        })
    }else if(u=="/post"){
        fs.readFile("./views/post.html",function (err,data) {
            if(err){
                res.end("404 NOT FOUND！")
            }
            else {
                /*拿到数据将数据添加到数组中/
                重定向*/
                res.end(data)
            }
        })
        /*请求评论的页面*/
    }else if (u=="/pinglun"){
                /*拿到数据将数据添加到数组中，重定向*/
                var comment=parseObj.query
                comment.dataTime="2018.9.9"
                comments.push(comment);
                /*fs.readFile("./views/index.html",function (err,data) {
                    if(err){
                        res.end("404 NOT FOUND!")
                    }else {
                        var tp=template.render(data.toString(),{
                            comments:comments
                        })
                        res.end(tp)
                    }
                    
                 })*/    
                res.statusCode=302
                res.setHeader("Location","/")
                res.end();
    } else {
        fs.readFile("./views/404.html",function (err,data) {
            if(err){
                res.end("404 NOT FOUND！")
            }
            else {
                /*网站图标也是返回错误页面，不过不显示页面，处理成图标了*/
                res.end(data)
            }
        })
    }
})
.listen(3000,function () {
    console.log("我打开啦")
})
