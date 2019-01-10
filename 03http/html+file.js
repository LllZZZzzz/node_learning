var http=require("http");
var fs=require("fs");
var serve=http.createServer();
serve.on("request",function (req,res) {
    if(req.url=="/haokan"){
        fs.readFile("img/hahaha.jpg",function (err,data) {
            if(err){
                res.setHeader("content-type","text/plain;charset=utf-8")
                res.end("错啦。宝贝")
            }else {
                res.setHeader("content-type","image/jpeg")
                res.end(data)
            }
        })
    }
})
serve.listen(3000,function () {
    console.log("服务开启了")
})