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

app.listen(3000, ()=>{
    console.log('Server running');
})