//map method
let arr=[45,46,45];
let a= arr.map((value,index,array)=>
  {
    console.log(value,index,array)
    return value*value;
  })
console.log(a);
//filter method



let arr2=[45,23,21,0,3,5]

let a2=arr2.filter((a)=>
  {
    return a<10;
  })
console.log(a2);
//Array reduce method
let arr3=[1,2,3,4,5,4]
 let newarr3=arr3.reduce((h1,h2,h3)=>
  {
    return h1+h2*h3;
  })
console.log(newarr3);
