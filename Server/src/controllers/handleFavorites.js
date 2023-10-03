//tarea de express
let myFavorites = [];

function  postFav (req, res) {
    const character = req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
    }
    
function deleteFav (req, res) {
       const {id} = req.params
    
       const deleteChar = myFavorites.filter((char) => char.id !== Number(id))
       myFavorites = deleteChar;
       return res.status(200).json(myFavorites)
    }
    
module.exports = {postFav, deleteFav}

