function sum(n){
    var result=0;
    var i=0;
    while(i++ < n){
        result += i;
    }
    return result;
}

var n=10;
console.log("1+2+...+"+n+"="+sum(n))