/*引入包*/
/*
var fs=require("fs");
/!*打开文件  该方法会返回一个文件的描述符*!/
/!*fs.openSync(path, flags[, mode])
* flags 打开文件要操作的类型
* mode权限 一般不写*!/
var fd=fs.openSync("hello.txt","w");
/!*向文件中写入内容*!/
/!*fs.writeSync(fd, string[, position[, encoding]])
* fd文件描述符
* string要写入的内容
* position要写入的起始位置
* encoding 要写入的编码 默认utf-8
* *!/
fs.writeSync(fd,"今天停电啦",10);
/!*关闭文件*!/
/!*fs.closeSync(fd)
* fd文件描述符
* *!/
fs.closeSync(fd);
console.log("文件关闭啦");*/
var fs=require("fs");
/*var fd=fs.openSync("hello.txt","w")
fs.writeSync(fd,"今天要加油鸭！！",20,"unicode")
fs.closeSync(fd)*/
fs.open("hello.txt","w",function (err,fd) {
    if(!err){
        fs.write(fd,"我是异步的哦哦",function (err) {

        })
        fs.close(fd,function (err) {
            
        })
    }
})