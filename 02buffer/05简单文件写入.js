/*简单同步文件写入*/
/*异步简单文件写入就是把之前的异步写入进行封装*/
/*fs.writeFile(file, data[, options], callback)*/
/*options <Object> | <string>
    encoding <string> | <null> 默认 = 'utf8'
    mode <integer> 默认 = 0o666
    flag <string> 默认 = 'w'*/
var fs=require("fs");
fs.writeFile("jiandan.txt","我是简单写入的",{flag:"r+"},function (err) {
    console.log(err);
})