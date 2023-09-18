import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({onSearch, random}) =>{
    return (
        <div>
            <button onClick={random}>Random</button>
            <SearchBar onSearch={onSearch}/>
            
            
        </div>
    )
}

export default NavBar;