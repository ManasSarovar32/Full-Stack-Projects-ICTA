const mymodule=require("./addModule"); //addModule is the custom module(it is created as a new file & es6 is written in that)

var x=22;
var y=8;

var z=mymodule.addNum(x,y);
var s=mymodule.subNum(x,y);
var m=mymodule.mulNum(x,y);
var d=mymodule.divNum(x,y);

console.log(z);
console.log(s);
console.log(m);
console.log(d);