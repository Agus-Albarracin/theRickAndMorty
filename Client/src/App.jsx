import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites'
import Form from './components/Form/Form';
import NavBar from './components/Nav/NavBar';



import { useState, useEffect} from 'react'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'

import axios from 'axios'

const EMAIL = 'agus@gmail.com';
const PASSWORD = 'asd123';

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
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([])
   // SIMULADOR DE LOGIN ULTRABASICO.
   // const login = (userData) => {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
   
   const login = (userData) =>{
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   const logOut = () =>{
      setAccess(false);
      navigate('/home');
   }

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
   

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (

      <div className='App'>

         { pathname !== "/" && <NavBar onSearch={onSearch}
                                       logOut={logOut}
                                       random={randomHandler} /> }
         <Routes>

         /* Form / Login */
         <Route path="/" element={<Form login={login}/>} />

         /*Cards*/
         <Route path="/home" element={
         <Cards characters={characters} onClose={onClose} />}>
         </Route>

         /* Favorites */

         <Route path='/favorites' element={ <Favorites />} />

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
