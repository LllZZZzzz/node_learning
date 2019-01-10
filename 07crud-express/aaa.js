/*var jq=require("jquery")
console.log(jq)*/
/*
function hahaha(callback) {
    console.log(".......")
    callback(123)
}
hahaha(function (num) {
    console.log(num)
})
global. a=123456
console.log(global.a)*/
var Sub = function(initValue) {
    var sum=initValue;
    this.getResult=function () {
        return sum
    }
    this.add=function (initValue) {
        if ((typeof initValue)!="number"){
            return this
        }
        sum=sum+initValue
        return this;
    }
}
var num=new Sub(0).add(false).add(2).add(444).getResult()
console.log(num)