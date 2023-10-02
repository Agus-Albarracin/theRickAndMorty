import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = () =>{
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
           <img src={character.image && character.image} alt="name"></img>
           <h1>name: {character.name && character.name}</h1>
           <h1>status: {character.status && character.status}</h1>
           <h1>species: {character.species && character.species}</h1>
           <h1>gender: {character.gender && character.gender}</h1>
           <h1>origin: {character.origin?.name && character.origin?.name}</h1>
        </div>
    )
}

export default Detail;