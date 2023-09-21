var arr=[30,20,10,40,50];
arr.sort();
document.write("<ul>");
for (var a=0;a<=4;a++)
{
    
    document.write( "<li>"+arr[a]+"</li>"); 
}
document.write("<ul>");

arr.reverse();

document.write("<ul>");
for (var a=0;a<=4;a++)
{
    
document.write( "<li>"+arr[a]+"</li>"); 
}
document.write("<ul>");
arr.reverse();
arr.pop();
for (var a=0;a<=4;a++)
{
    
document.write( "<li>"+arr[a]+"</li>"); 
}
document.write("<ul>");
 arr.push(60)

for (var a=0;a<=4;a++)
{
    
document.write( "<li>"+arr[a]+"</li>"); 
}
document.write("<ul>");