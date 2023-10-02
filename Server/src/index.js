const http = require ("http");
const characters = require ("./utils/data")

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')

const { url } = req;



if(url.includes("/rickandmorty/character")){
    
    const id = url.split("/").at(-1)
    
    const character = characters.find((char) => char.id === Number(id))

    if(character){
        res.writeHead(200, {"Content-Type": "application/json"});
        return res.end(JSON.stringify(character))

    }else{
         res.writeHead(400,{"Content-Type": "application/json"});
         return res.end(JSON.stringify({ error: "Character not found"}))

    
   }    
}

}).listen(3001, "localhost")

