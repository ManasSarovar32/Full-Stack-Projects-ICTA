const express=require('express');       //web app develop

var app=express();

app.get('/',(req,res)=>
{
    res.send("<h1>Engine out completely</h1>");
});

app.get('/home',(req,res)=>
{
    res.send('Welcome to home')
})

app.get('/contact',(req,res)=>
{
    res.send('[{"Name":"Tom","Age":23},{"Name":"Riya","Age":19}]')
})

app.listen(2255);