var num1=10;
var num2=16;

var num3=add(num1,num2);
console.log("Add ="+num3);

var num4=sub(num1,num2);
console.log("Sub ="+num4);

var num5=mul(num1,num2);
console.log("Mul ="+num5);

function add(x,y)
{
    z=x+y;
    return z;
}

function sub(x,y)
{
    z=x-y;
    return z;
}

function mul(x,y)
{
    z=x*y;
    return z;
}