var fs=require("fs");
/*创建一个可读流*/
var rs=fs.createReadStream("图片.jpg");
var ws=fs.createWriteStream("图片2.jpg");
/*要读取可读流的内容必须为刻度流绑定一个data事件  绑定data事件，自动读取*/
rs.once("open",function () {
    console.log("可读流打开了");
})
rs.once("close",function () {
    console.log("可读流关闭了");
    ws.end();
})
ws.once("open",function () {
    console.log("可写流打开了")
})
ws.once("close",function () {
    console.log("可写流关闭了");
})
rs.on("data",function (data) {
    console.log(data.length);
    ws.write(data);
})

