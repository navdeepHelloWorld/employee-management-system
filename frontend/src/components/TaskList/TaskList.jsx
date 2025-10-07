import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
    if (!data || !data.tasks || !Array.isArray(data.tasks)) {
        return (
            <div className="h-[55%] flex items-center justify-center text-white">
                No tasks available
            </div>
        )
    }

    const renderTask = (task, index) => {
        // Priority order: completed > failed > active > new
        if (task.completed) {
            return <CompleteTask key={`${task.title}-${index}`} data={task} />
        }
        if (task.failed) {
            return <FailedTask key={`${task.title}-${index}`} data={task} />
        }
        if (task.action) {
            return <AcceptTask key={`${task.title}-${index}`} data={task} />
        }
        if (task.newTask) {
            return <NewTask key={`${task.title}-${index}`} data={task} />
        }
        
        // Default case - show as new task
        return <NewTask key={`${task.title}-${index}`} data={task} />
    }

    return (
        <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 rounded-xl'>
            {data.tasks.length === 0 ? (
                <div className="text-white text-center w-full">
                    No tasks assigned yet
                </div>
            ) : (
                data.tasks.map((task, index) => renderTask(task, index))
            )}
        </div>
    )
}

export default TaskList