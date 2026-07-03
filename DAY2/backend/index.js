const express = require("express");

const  app = express();

PORT = 3000;

function hello(req,res){
    res.send("Hello world");
}

function helloworld(req,res){
    res.json({
        message : "Hello World"
    })
}

function add(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const sum = a+b;

    res.json({
        result : sum
        })
}

function areaOfCirle(req,res){
    const r = Number(req.query.r);

    const area = (4/3)*3.14*r*r*r;

    res.json({
        areaOfCirclee : area
    })
}

app.get("/",hello);
app.get("/1",helloworld);

app.get("/add",add); //http://localhost:3000/add?a=10&b=20 or localhost:3000/functionname?(some vale)&(some value)
app.get("/area",areaOfCirle);

app.listen(PORT);
