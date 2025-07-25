import React from "react";

const CreateTask = ()=>{

     const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, settaskDescription] = useState(second)
   
   const submitHandler =(e)=>{
        e.preventDefault()
        console.log("task created")
   }

    return (
        <div className=" p-5 bg-[#1c1c1c] rounded mt-8 ">
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className="flex  flex-wrap w-full  items-start justify-between ">
          <div className="w-1/2">
                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5 ">Task Title</h3>
                    <input type="text" placeholder="Ui Design"
                     className="w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                </div>
                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5 ">Date</h3>
                    <input type="date" className="w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                </div>
                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5 ">Asign to</h3>
                    <input type="text" placeholder="employee name" className= "w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                </div>
                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5 ">Cetagory</h3>
                    <input type="text" placeholder="design, dev, etc" className=" w-4/5 text-sm py-1 px-2 outline-none bg-transparent text-white border-[1px] border-gray-400  rounded mb-3" />
                </div>
            
        
            </div>
            
            
            <div className="w-2/5 flex flex-col items-start ">
               <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            
                <textarea 
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