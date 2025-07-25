import React from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = ({data}) =>{
    
    const logOutUser = ()=>{
        localStorage.setItem("loggedInUser","")
        window.location.reload()
    }
   

    return (
        <div  className=" flex item-end justify-between text-white">
            <h1 className="text-2xl ">Hello  <br/><span className="text-3xl font-semibold">{data.firstName} 🫡</span></h1> 
            <button onClick={logOutUser} className="bg-red-500 text-lg font-medium text-white px-4 py-2 m-5 rounded-sm  "> Log Out</button>
        </div>
    )
}

export default Header