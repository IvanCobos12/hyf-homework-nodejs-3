const express = require('express');
const app = express();

const users = [];

app.get("/", (req,res)=>{
    res.send('Hello World!');
})

app.get("/users", (req,res) => {
    res.send(users);
})

app.get("/users/:id", (req,res) => {
    const user = users.find(item => item.id == req.params.id);
    res.json(user);1
})

app.post("/users", (req,res)=>{
    users.push({id:0});
    res.json(users);
    res.send('El usuario se ha creado');
})

app.listen(3000, ()=>{
    console.log('Server running');
})