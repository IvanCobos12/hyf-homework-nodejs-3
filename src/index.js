const e = require('express');
const express = require('express');
const app = express();

const users = [];

app.get("/", (req,res)=>{
    res.send('Hello World!');
})

app.get("/users", (req,res) => {
    res.json(users);
})

app.get("/user/:id", (req,res) => {
    const user = users.find(item => item.id == req.params.id);
    res.json(user);
})

app.post("/user", (req,res)=>{
    users.push({id:0});
    res.json(users);
})

app.delete("/user/:id", (req,res)=>{
    const id = req.params.id;


    if(users.length > 0){

        index = users.indexOf(id);
        users.splice(index,1);
        res.status(202).json(users);
    }
    else{
        res.status(204).json(users);
    }
    // users.filter( (elem,index) => {
        

    //     if(elem.id == id){

    //         users.splice(index, 1);

    //         res.status(202).json(users)
    //     }
    //     else{
    //         res.status(204).json(users);
    //     }   
    // });
    
});

app.listen(3000, ()=>{
    console.log('Server running');
})