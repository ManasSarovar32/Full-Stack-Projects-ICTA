var num=132
var rev=0;
var rem=0;

var res=reverse(num,rev,rem);
console.log(rev);

function reverse(x,y,z)
{
    while (num>0)
    {
    rem=num%10;
    rev=rev*10+rem;
    num=parseInt(num/10);
    }
}
