//Tarea de express
const express = require('express');
const server = express();
const PORT = 3001;
const { router } = require('./routes/index');
const  morgan  = require("morgan");
const  cors  = require("cors");

server.use(express.json());
server.use(morgan('dev'))
server.use(cors())

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   ); 
   next();
});

server.use("/rickandmorty", router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});













//TAREA DE EXPRESS
// const express = require("express");
// const server = express();
// const PORT = 3001;

// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });

//TAREA DE PROMISSE 

// const http = require ("http");
// const  getCharById = require ("./controllers/getCharById")

// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req

//     if( url.includes("/rickandmorty/character")){
//         const id = url.split("/").at(-1) 
//         getCharById(res, Number(id))
//         console.log("estoy bien")
        
//     }

// })

// .listen(3001, "localhost");

//tarea de WEB SERVER
// const http = require ("http");
// const characters = require ("./utils/data")

// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*')

// const { url } = req;



// if(url.includes("/rickandmorty/character")){
    
//     const id = url.split("/").at(-1)
    
//     const character = characters.find((char) => char.id === Number(id))

//     if(character){
//         res.writeHead(200, {"Content-Type": "application/json"});
//         return res.end(JSON.stringify(character))

//     }else{
//          res.writeHead(400,{"Content-Type": "application/json"});
//          return res.end(JSON.stringify({ error: "Character not found"}))

    
//    }    
// }

// }).listen(3001, "localhost")

