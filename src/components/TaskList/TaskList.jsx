import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./failedTask";

const TaskList = ({data})=>{
     console.log(data)
    return(
        <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5  w-full mt-10 rounded-xl'>
          {data.tasks.map((elem,idx)=>{
            
            if(elem.action){
                return <AcceptTask key={idx} data={elem} />
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem} />
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} />
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem} />
            }

          })}
          
           
           
        </div>
    )
}

export default TaskList