exports.add=function (a,b) {
    return a+b;
}
var a=1;
/*这样写就是全局的了*/
b=3;
/*怎么证明不是全局作用域*/
console.log(global.a);
/*怎么证明是在函数中的*/
console.log(arguments);
/*你给我把函数展示出来*/
console.log(arguments.callee.toString());