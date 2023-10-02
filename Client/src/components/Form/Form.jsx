import validation from "./validation";

import { useState } from "react";




const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password:""
    });
    
    const [errors, setErrors] = useState({});


    const handleChange = (event) =>{
        setUserData({ ...userData,[event.target.name]: event.target.value})
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    }
    return (
        <div>
            <form>
                <label htmlFor="email">Mail: </label>
                    <input
                     value={userData.email}
                     onChange={handleChange}
                     type="text" 
                     name="email"
                    />
                    {errors.e1 ? (<p>{errors.e1}</p>) : 
                     errors.e2 ? (<p>{errors.e2}</p>) :
                                 (<p>{errors.e3}</p>) 
                                 }

                <label htmlFor="password">Pass: </label>
                    <input  
                     value={userData.password}
                     onChange={handleChange}
                     type="password"
                     name="password"
                    />
                    {errors.p1 ? (<p>{errors.p1}</p>) : 
                                 (<p>{errors.p2}</p>)
                                 }

                    <br />
                
                <button 
                type="submit"
                onClick={handleSubmit}
                >Submit</button>


            </form>
        </div>
    )
}

export default Form;