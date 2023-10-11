import axios from "axios"
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async(dispatch) => {
     try{ 
        const {data} = await axios.post(endpoint, character);
        if(!data.length) throw Error ("No hay favoritos")
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });

     } catch(error){ 
        
        (alert ("Sucedio algo inesperado, intentelo de nuevo"))
     }

  } 
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
     try { const {data} = await axios.delete(endpoint)

            if(true)

           return dispatch({
                  type: REMOVE_FAV,
                  payload: data,
                 });
     } catch (error) {
        (alert (error.message))
     }
   };
};

export const filterCards = (gender) =>{
        return {type: "FILTER", payload: gender}
}

export const orderCards = (orden) =>{
        return { type: "ORDER", payload: orden}
}

// export const addFav = (character) =>{
//         return {type: "ADD_FAV", payload: character}
// }


//tarea de express
// export const addFav = (character) => {
//         const endpoint = 'http://localhost:3001/rickandmorty/fav';
//         return (dispatch) => {
//            axios.post(endpoint, character).then(({ data }) => {
//               return dispatch({
//                  type: 'ADD_FAV',
//                  payload: data,
//               });
//            });
//         };
//      };

// export const removeFav = (id) =>{
//         return {type: "REMOVE_FAV", payload: id}
// }

// tarea de express
// export const removeFav = (id) => {
//         const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//         return (dispatch) => {
//            axios.delete(endpoint).then(({ data }) => {
//               return dispatch({
//                  type: 'REMOVE_FAV',
//                  payload: data,
//            });
//            });
//         };
//      };