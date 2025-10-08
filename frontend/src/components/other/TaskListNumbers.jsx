import React from "react";

const TaskListNumbers = ({ data }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
            <div className='bg-blue-500/20 border border-blue-500/30 py-6 px-5 rounded-xl text-center shadow-sm'>
                <h2 className='text-3xl text-blue-300 font-semibold'>{data.taskStats.new}</h2>   
                <h3 className='text-sm text-blue-200/80 mt-1 tracking-wide uppercase'>New</h3>
            </div>
            <div className='bg-green-500/20 border border-green-500/30 py-6 px-5 rounded-xl text-center shadow-sm'>
                <h2 className='text-3xl text-green-300 font-semibold'>{data.taskStats.completed}</h2>   
                <h3 className='text-sm text-green-200/80 mt-1 tracking-wide uppercase'>Completed</h3>
            </div>
            <div className='bg-yellow-500/20 border border-yellow-500/30 py-6 px-5 rounded-xl text-center shadow-sm'>
                <h2 className='text-3xl text-yellow-300 font-semibold'>{data.taskStats.active}</h2>   
                <h3 className='text-sm text-yellow-200/80 mt-1 tracking-wide uppercase'>Active</h3>
            </div>
            <div className='bg-red-500/20 border border-red-500/30 py-6 px-5 rounded-xl text-center shadow-sm'>
                <h2 className='text-3xl text-red-300 font-semibold'>{data.taskStats.failed}</h2>   
                <h3 className='text-sm text-red-200/80 mt-1 tracking-wide uppercase'>Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers