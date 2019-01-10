/*1.同步文件的读取
* 2.异步文件读取
* 3.简单文件读取
* 4.流式文件读取
* */
/*fs.readFile(path[, options], callback)
* fs.readFileSync(path[, options])*/
/*简单数据读取会占用大量内存空间 因为它是一次性读完 放入buffer中*/
var fs=require("fs");
fs.readFile("lizhuo1寸.jpg",function (err,buf) {
    if(err){
        console.log(err);
    }else {
        fs.writeFile("图片4.jpg",buf,function (err) {
            if(err){
                console.log(err);
            }
        })
    }
})
/*可读流不需要手动关闭*/