var fs=require("fs");
var ws=fs.createWriteStream("图片3.jpg");
var rs=fs.createReadStream("图片2.jpg");
rs.pipe(ws);