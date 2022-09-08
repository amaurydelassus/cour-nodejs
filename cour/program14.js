function f(x, callback){
    if(x){
        console.log("true");
        callback(x);
    }else{
        console.log("false");
    }
    return false;
}

f(10, (y) => console.log(y));
console.log("f done");

function g(callback){
    setTimeout(() => {
        console.log("finished");
        callback(10);
    },1000);
}