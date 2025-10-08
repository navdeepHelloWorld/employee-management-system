import React from "react";

const Header = (props) => {
    const logOutUser = () => {
        props.changeUser()
    }
   
    return (
        <div className="flex items-center justify-between text-white">
            <div>
                <p className="text-sm text-gray-400">Welcome back,</p>
                <h1 className="text-3xl font-semibold tracking-tight">{props.data.firstName} 🫡</h1>
            </div>
            <button 
                onClick={logOutUser} 
                className="bg-red-600 text-sm font-medium text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors shadow-sm">
                Log Out
            </button>
        </div>
    )
}

export default Header