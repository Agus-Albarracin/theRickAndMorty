import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

    case "ADD_FAV":
    return {...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload]}

    case "REMOVE_FAV":
    return {...state,
            myFavorites: state.myFavorites.filter(
                (char) => char.id !== action.payload)}
    
    case "FILTER":
    if (action.payload === "All")
    return {...state,myFavorites:state.allCharacters};

    const charFilter = state.allCharacters.filter((char) => char.gender === action.payload)
    return {...state, myFavorites: charFilter}

    case "ORDER":
    const copyAllChar = [...state.allCharacters];
    return {
        ...state,
        myFavorites:
        action.payload === "A"
        ? copyAllChar.sort((a,b) => a.id - b.id)
        : copyAllChar.sort((a,b) => b.id - a.id)
    }

    

    default:
    return {...state}
    }
        
}

export default reducer;