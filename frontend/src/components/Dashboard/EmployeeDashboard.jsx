import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard=(props) =>{
    
 return (
    <div className="min-h-screen p-6 bg-[#111214] rounded-2xl">
       <Header changeUser={props.changeUser}  data={props.data} />
       <TaskListNumbers data={props.data} />
       <TaskList data={props.data} />
       </div>
 )
}

export default EmployeeDashboard  