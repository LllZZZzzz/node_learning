/*
fs.createReadStream(path[, options])
实际也是异步的流
*/
var fs=require("fs");
/*创建流*/
/*{start:10}*/
var ws=fs.createWriteStream("liuliuliu.txt",{start:3});
ws.write("我");
ws.write("你");
/*监听流的开启和关闭*/
ws.once("open",function () {
    console.log("打开了");
});
ws.once("close",function () {
    console.log("关闭了");
})
/*关闭了写入侧的流，内容已经在管子里了 只写入了一次就关闭了*/
ws.end();
/*ws.close 关闭了写出侧的流*/