let complete =true;
let prom=new promise(function(resolve,reject){
    if(complete)
    {
resolve("sucessful");
    }
    else{
reject("I am failed");
    }
});
console.log(prom);