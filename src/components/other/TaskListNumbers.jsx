import React from "react";

const TaskListNumbers = ({ data }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
            <div className='bg-red-400 py-6 px-4 rounded-xl text-center'>
                <h2 className='text-3xl text-white font-semibold'>{data.taskStats.new}</h2>   
                <h3 className='text-lg text-white font-medium'>New Task</h3>
            </div>
            <div className='bg-blue-400 py-6 px-4 rounded-xl text-center'>
                <h2 className='text-3xl text-white font-semibold'>{data.taskStats.completed}</h2>   
                <h3 className='text-lg text-white font-medium'>Completed Task</h3>
            </div>
            <div className='bg-yellow-400 py-6 px-4 rounded-xl text-center'>
                <h2 className='text-3xl text-white font-semibold'>{data.taskStats.active}</h2>   
                <h3 className='text-lg text-white font-medium'>Accepted Task</h3>
            </div>
            <div className='bg-green-400 py-6 px-4 rounded-xl text-center'>
                <h2 className='text-3xl text-white font-semibold'>{data.taskStats.failed}</h2>   
                <h3 className='text-lg text-white font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers