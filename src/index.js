const express = require('express');
const app = express();

const user = [];

app.get("/", (req,res)=>{
    res.send('Hello World!');
})

app.get("/users", (req,res) => {
    res.send(users);
})

app.listen(3000, ()=>{
    console.log('Server running');
})