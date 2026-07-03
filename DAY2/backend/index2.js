const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const names = []

//CREATE 
//CREATE
app.post("/names",(req,res)=>{
    const{name}=req.body;
    if(!name){
        return res.status(400).json({
            error: "Name is required",
        });
    }

    names.push(name);
    res.status(201).json({
        message:"Name Added"
    });
});

//READ ALL
app.get("/names",(req,res)=>{
    res.status(200).json({
        message: "Success",
        data: names,
    });
});

//READ ONE

app.get("/names/:index",(req,res)=>{
    const index = Number(req.params.index);

    if(index<0 || index>=names.length){
        return res.status(404).json({
            error:"Not Found",
        });
    }

    res.status(200).json({
        name: names[index],
    });

})

//UPDATE 
app.put("/names/index",(req,res)=>{
    const index = Number(req.params.index);
    const {name} = req.body;

    if(index<0 || index>=names.length){
        return res.status(404).json({
            error; "Not Found",
        });
    }

    names[index] = name;
    res.status(200).json({
        message: "Successfully Updated",
        data: names,
    });
});

//Delete
app.delete("/names/:index",(req,res)=>{
    const index = req.params.index;
    if(index<0 || index>=names.length){
        return res.status(404).json({
            error: "Not Found",

        });
    }

    names.splice(index,1);

    req.status(200).json({
        message:"Deleted Successfully"
        data:names,
    });

});

app.listen(PORT)