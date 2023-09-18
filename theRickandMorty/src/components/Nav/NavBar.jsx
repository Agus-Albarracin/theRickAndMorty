import SearchBar from "../SearchBar/SearchBar";
import {Link, NavLink} from "react-router-dom"

const NavBar = ({onSearch, random, logOut}) =>{
    return (
        <div>
            <button onClick={random}>Random</button>
            <SearchBar onSearch={onSearch}/>
            <Link to="/about"> <button>About</button> </Link>
            <Link to="/home"> <button>Home</button>  </Link>
            <button onClick={logOut}>Exit</button>    

        </div>
    )
}

export default NavBar;