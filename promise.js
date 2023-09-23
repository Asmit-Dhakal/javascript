 function prom(complete) {
return new Promise(function(resolve,reject){
    console.log("Fetching data,please wait.")
    setTimeout(()=>{
        if(complete)

        {
    resolve("sucessful");
        }
        else
        {
    reject("I am failed.");
        }
    }, 1000)
});

 }
 let onfulfilment=(result)=>{
    console.log(result);

 }
 let onRejection=(error)=>{
    console.log(error);
 }
 prom(true).then(onfulfilment);
 prom(true).catch(onRejection);
