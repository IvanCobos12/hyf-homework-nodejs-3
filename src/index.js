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
    res.send(users);
})

app.post("/users/:id", (req,res)=>{
    res.send('El usuario se ha creado');
})

app.listen(3000, ()=>{
    console.log('Server running');
})