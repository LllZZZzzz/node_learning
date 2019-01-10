var buf=Buffer.alloc(2);
buf[0]=0x31;
buf[1]=0x35
/*buf[1]=0xb8;
buf[2]=0x80;*/
console.log(buf.toString())
var b=Buffer.from("36")
/*每位只能读取8位，多余的位舍掉*/
console.log(b);
/*只要是数字，打印出来的就是数字*/

/*for (var i=0;i<buf.length;i++){
    console.log(buf[i]);
}*/
