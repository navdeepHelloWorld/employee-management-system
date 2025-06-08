import React from "react";

const Header = () =>{
    return (
        <div  className=" flex item-end justify-between text-white">
            <h1 className="text-2xl ">Hello  <br/><span className="text-3xl font-semibold">Navdeep 🫡</span></h1> 
            <button className="bg-red-500 text-lg font-medium text-white px-4 py-2 m-5 rounded-sm  "> Log Out</button>
        </div>
    )
}

export default Header