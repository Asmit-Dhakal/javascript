function sum(name,...args)
{
    let sum=0;
for (let i in args)
{
    sum=sum+args[i];
}
document.write(sum)
}
sum("Hari",20,30,40,50,60)