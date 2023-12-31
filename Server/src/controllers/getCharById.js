//Tarea de asyc await
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {


try{
const { id } = req.params;
const { data } = await axios.get(URL + id);

if (!data.name) throw new Error(`ID: ${id} Not Found`);

    const character = {
      id : data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species
      }
     return res.status(200).json(character); 

} catch(error){
   return   error.message.includes('ID')
   ? res.status(404).send(error.message)
   : res.status(500).send(error.response.data.error)
  }

}

module.exports = { getCharById }

//Tarea de express
// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
// const { id } = req.params
// try{
//     axios.get(URL + id)
//    .then(({data}) => { const {id, image, name, gender, species} = data;
//      if(data){  return res.status(200).json(data); }
//                 return res.status(404).json({messagge: "Not found"}) 
//    })

// }
// catch(error){ res.status(500).json({messagge: (error)})}
// }

// module.exports = { getCharById }


//TAREA DE PROMISSE 
// const axios = require("axios");

// const getCharById = (res, id) =>{

//    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//   .then((response)=>{

//        const {id, name, status, species, gender, origin, image} = response.data;
//        res.writeHead(200, {"Content-Type": "application/json"});
//        res.end(JSON.stringify({id, name, status, species, gender, origin, image}))
//     })
//     .catch((error)=>{ 

//        res.writeHead(500, {"Content-Type": "text/plain"})
//        res.end("error.message")
//     })


// }

// module.exports = getCharById 