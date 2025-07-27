
import { React, useState,useEffect } from "react";

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("")
    
    const [newTask, setNewTask] = useState({})
    
    useEffect(() => {
        if (newTask) {
          const data = JSON.parse(localStorage.getItem("employees"));
          data.forEach((e) => {
            if (assignTo === e.firstName) {
              e.tasks.push(newTask);
              console.log(e);
            }
          });
          localStorage.setItem("employees", JSON.stringify(data));
        }
      }, [newTask]);
      

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({taskTitle,taskDescription,taskDate,category,assignTo,active:false,new:true,failed:false,completed:false})
       console.log("form submited")

        // setAssignTo("");
        // setCategory("");
        // setTaskDate("");
        // setTaskDescription("");
        // setTaskTitle("");
    }
    
    return (
        <div className=" p-5 bg-[#1c1c1c] rounded mt-8 ">
            <form onSubmit={(e) => {
                submitHandler(e)
            }} 
            className="flex  flex-wrap w-full  items-start justify-between ">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 ">Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
    
                        type="text" placeholder="Ui Design"
                            className="w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 ">Date</h3>
                        <input
                         value={taskDate}
                         onChange={(e)=>{
                             setTaskDate(e.target.value)
                         }}
                        type="date" className="w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 ">Asign to</h3>
                        <input
                         value={assignTo}
                         onChange={(e)=>{
                             setAssignTo(e.target.value)
                         }}
                        type="text" placeholder="employee name" className="w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 ">Cetagory</h3>
                        <input
                         value={category}
                         onChange={(e)=>{
                             setCategory(e.target.value)
                         }}
                        type="text" placeholder="design, dev, etc" className=" w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                    </div>


                </div>


                <div className="w-2/5 flex flex-col items-start ">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>

                    <textarea
                         value={taskDescription}
                         onChange={(e)=>{
                             setTaskDescription(e.target.value)
                         }}
                        placeholder="Describe your task"
                        className="bg-white w-full h-44 textsm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400 rounded text-black resize-none "
                        rows="10" ></textarea>

                    <button className="w-full text-sm  text-black px-5 py-3 mt-3 bg-emerald-400 hover:bg-emerald-600 rounded h-10">Create Task</button>


                </div>

            </form>
        </div>

    )
}

export default CreateTask