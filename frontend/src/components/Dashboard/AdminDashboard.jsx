import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props)=>{
    
    return (
        <div className='min-h-screen w-full p-6 bg-[#111214] rounded-2xl'>
            <Header changeUser={props.changeUser} data={props.data}/>
           <CreateTask/>
           <AllTask/>

           
        </div>
    )
}
export default AdminDashboard