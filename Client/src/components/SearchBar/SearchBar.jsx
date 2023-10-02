
import { useState } from "react";


const SearchBar = ({onSearch, random}) =>{
   const [id, setId] = useState("")

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   const search = () =>{
      onSearch(id)
      setId('')
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}placeholder="Ingrese id..."/>
         <button onClick={search} >Agregar</button>
      </div>
   );
}
 export default SearchBar;