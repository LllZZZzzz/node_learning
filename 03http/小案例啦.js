var http=require("http")
var fs=require("fs")
var template=require("art-template")
var server=http.createServer()
var baseUrl="./小可爱的可爱文件夹"
server.on("request",function (req,res) {
    var url=req.url
    if(url=="/"){
        fs.readFile(baseUrl+"/index.html",function (err,data) {
            if(err){
               return res.end('404 NOT FOUND!')
            }else {
                fs.readdir(baseUrl,function (err,files) {
                    if(err){
                        data.end("找不到文件夹")
                    }else {
                        var tp=template.render(data.toString(),{
                            title:baseUrl,
                            files:files
                        })
                        res.end(tp)
                    }
                })
            }
            /*res.setHeader("content-Type","text/plain;charset=utf-8")*/
        })
    }else {
        fs.readFile(baseUrl+url,function (err,data) {
            if(err){
                return res.end('404 NOT FOUND!')
            }
            /*res.setHeader("content-Type","text/plain;charset=utf-8")*/
            res.end(data);
        })
    }
})
server.listen(3001,function () {
    console.log("我开启啦")
})