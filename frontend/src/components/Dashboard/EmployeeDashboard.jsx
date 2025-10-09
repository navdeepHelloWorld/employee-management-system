import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { getMyTasksApi } from "../../utils/api";
const EmployeeDashboard=(props) =>{
    const [tasks, setTasks] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (!token) return // demo mode falls back to local data
        setLoading(true)
        getMyTasksApi()
          .then((res) => setTasks(Array.isArray(res) ? res : []))
          .catch((e) => setError(e.message || 'Failed to load tasks'))
          .finally(() => setLoading(false))
    }, [])

 return (
    <div className="min-h-screen p-6 bg-[#111214] rounded-2xl">
       <Header changeUser={props.changeUser}  data={props.data} />
       <TaskListNumbers data={props.data} />
       {loading ? (
         <div className="text-gray-300 mt-6">Loading tasks...</div>
       ) : error ? (
         <div className="text-red-400 mt-6">{error}</div>
       ) : tasks ? (
         <TaskList data={{ id: props.data._id, tasks }} />
       ) : (
         <TaskList data={props.data} />
       )}
       </div>
 )
}

export default EmployeeDashboard  