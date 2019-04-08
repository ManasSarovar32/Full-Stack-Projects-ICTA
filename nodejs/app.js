const express=require('express');       //web app develop

var app=express();

app.get('/',(req,res)=>
{
    res.send("Engine out completely");
});

app.get('/home',(req,res)=>
{
    res.send('Welcome to home')
})

app.get('/contact',(req,res)=>
{
    res.send("Contact page")
})

app.listen(2255);