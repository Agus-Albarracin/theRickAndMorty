import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState, useEffect} from 'react'
import { addFav, removeFav } from '../../redux/actions'

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {


   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{
    isFav ?
   removeFav(id)  :

   addFav({id, name, status, species, gender, origin, image, onClose})
   

   setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      <div>
          <button onClick={()=>{onClose(id)}}>X</button>

   { isFav ?
         (<button onClick={handleFavorite}>❤️</button>)
      :  (<button onClick={handleFavorite}>🤍</button>)
   }

          <Link to={`/detail/${id}`}>
          <h2>{name};</h2>
          <img src={image} alt={name} /> 
          </Link>

          {/* <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin?.name}</h2> */}
          
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
return {
   addFav: (character) => dispatch(addFav(character)),

   removeFav: (id)     => dispatch(removeFav(id))
}
}

const mapStateToProps = (state) =>{
return{
   myFavorites: state.myFavorites
}



}


export default connect(mapStateToProps, mapDispatchToProps)(Card);