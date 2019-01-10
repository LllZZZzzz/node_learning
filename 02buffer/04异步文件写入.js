/*fs.open(path, flags[, mode], callback)*/
var fs=require("fs");
/*异步调用的方法都是通过回调函数返回的
* err错误对象，如果没有错，则值为null
* 异步写入代码的可读性差，但是一旦异步的代码出错，并不会影响下面程序的执行*/
fs.open("waa.txt","w",function (err,fd) {
    if(!err){

        fs.write(fd,"今天天气很好啊",function (err) {
            if(!err){
                fs.close(fd);
            }
        })
    }
})