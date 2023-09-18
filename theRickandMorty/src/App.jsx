import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import NavBar from './components/Nav/NavBar';



import { useState } from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'

import axios from 'axios'

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() {

   const {pathname} = useLocation();
   const [characters, setCharacters] = useState([])


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {

            let rptido =  characters.find((char) => char.id === data.id);
            if(rptido)  {  alert('El personaje está invocado!'); }

            else setCharacters((oldChars) => [...oldChars, data]);

         }  else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   // const onSearch = ()=>{
   //    setCharacters([...characters, example])
   // } esta funcion la creamos en la hw8 con la intencion de ver la funciones del estado. y el example de la hw.
   const onClose = (id) => {
      setCharacters(
         characters.filter((char) =>{
            return char.id !== Number(id)
         })
      )
   }

   const randomHandler = () => {
     let haveIt = []
     let random = (Math.random() * 826).toFixed();
     random = Number(random);

     if(!haveIt.includes(random)){
      haveIt.push(random);
      axios(`https://rickandmortyapi.com/api/character/${random}`)
      .then(({ data }) =>{
         if(data.name){
            setCharacters((oldChars) => [...oldChars, data])
         } else {
            window.alert("No hay personaje con ese id")
         }
      })
     } else {
      console.log("ya agregaste todos los pjs");
      return false
     }


   }
   return (

      <div className='App'>

         { pathname !== "/" && <NavBar onSearch={onSearch}
                                       random={randomHandler} /> }
         <Routes>

         /*Cards*/
         <Route path="/home" element={
         <Cards characters={characters} onClose={onClose} />}>
         </Route>

         /*About */
         <Route path="/About" element={ <About /> } />

         /*Detail*/
         <Route path="/detail/:id" element={ <Detail />}/>

         /* Error */
         <Route path='*' element={<Error />}/>


         </Routes>
      
         
         
      </div>
   );
}

export default App;
