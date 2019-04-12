const express=require('express');       //web app develop
const exphbs=require('express-handlebars')  //engine handlebar

var app=express();

app.engine('handlebars',exphbs({defaultLayout:'mainpage'}));     //to specify the engine. default layout is to specify the layout page.
app.set('view engine','handlebars');
app.use(express.static('views/static'));        //to refer image in the file static
app.use(express.urlencoded());      //urlencoded function used to fetch data from request

app.get('/',(req,res)=>
{
    res.render('index',{name:'Tom'});    //render function to get response from index,{name:'Tom'}-->for passing data from back to front
});

app.get('/about',(req,res)=>
{
    res.render('about');
})

app.get('/home',(req,res)=>
{
    res.send('Welcome to home')
})

app.get('/contact',(req,res)=>
{
    res.render('contact')
})
app.get('/gallery',(req,res)=>
{
    res.render('gallery')
})
app.post('/getdata',(req,res)=>
{
    //res.send('data accepted');
    var name=req.body.name;
    var address=req.body.address;
    var place=req.body.place;
    var mobile=req.body.mobile;
    var email=req.body.email;
    
    console.log(name,address,place,mobile,email);  //to print on terminal

})

app.post('/login',(req,res)=>
{
    var user=req.body.username;
    var pass=req.body.password;
    
    if(user=='admin'&&pass=='1234')
    {
        res.send('success')
    }
    else
    {
        res.send('failed')
    }
})

app.listen(2255,()=>
{
    console.log('web app runing succesfully')
});       //to run