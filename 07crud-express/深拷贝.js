var a={b:function () {
        
    },
    e:[1,2,3]}
var b;
var result=shallowClone(a,b);
function shallowClone(sourceObj,targetObj) {
    /*判断是否是对象或者数组*/
    if(!(typeof sourceObj=="object")){
        targetObj=sourceObj;
        return targetObj
    }else {
        targetObj=sourceObj.constructor==Array ? [] : {}
        for(let i in sourceObj){
            targetObj[i]=shallowClone(sourceObj[i],targetObj[i])
        }
    }
   return targetObj;
}