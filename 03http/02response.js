var http=require("http");
var server=http.createServer();
server.listen(3001,function () {
    console.log("服务器开启了")
})
server.on("request",function (request,response) {
    response.setHeader("content-type","text/plain;charset=utf-8")
    var b=Buffer.from("你好")
    if(request.url=="/"){
            response.end("你好")
        console.log(request.socket.remotePort,request.socket.remoteAddress)
    }
})