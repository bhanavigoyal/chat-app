const express =require("express");
const app = express();
const PORT = 4000;


const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());


const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let users = [];

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    
});


app.get('/api',(req, res)=>{
    res.json({
        message: "Hello world",
    });
});

http.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`)
});