import React from "react";

const Header = (props) => {
    const logOutUser = () => {
        props.changeUser()
    }
   
    return (
        <div className="flex item-end justify-between text-white">
            <h1 className="text-2xl">
                Hello <br/>
                <span className="text-3xl font-semibold">{props.data.firstName} 🫡</span>
            </h1> 
            <button 
                onClick={logOutUser} 
                className="bg-red-500 text-lg font-medium text-white px-4 py-2 m-5 rounded-sm hover:bg-red-600 transition-colors">
                Log Out
            </button>
        </div>
    )
}

export default Header