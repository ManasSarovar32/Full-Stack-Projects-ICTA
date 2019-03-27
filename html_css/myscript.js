function operations()
{
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var op=document.getElementById("op").value;
    var z=0;

    if(op=="Add")
    {
        z=x+y;
    }
    else if(op=="Sub")
    {
        z=x-y;
    }
    else if(op=="Mul")
    {
        z=x*y;
    }
    else if(op=="Div")
    {
        z=x/y;
    }
    console.log(z);
    document.getElementById("result").innerHTML=z;
}