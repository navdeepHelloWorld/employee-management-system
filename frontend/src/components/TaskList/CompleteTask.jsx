import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-[#1b1d22] border border-white/10 border-l-4 border-l-green-500 py-5 px-5 rounded-xl shadow-sm'>
    <div className="flex justify-between items-center ">
     <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-200 border border-green-500/30" >{data.category}</span>
     <span className="text-xs text-gray-400">{data.date}</span>
    </div>
    <h2 className="mt-4 text-xl font-semibold text-white ">{data.title}</h2>
    <p className="text-sm mt-2 text-gray-300">
       {data.description}    
    </p>
    <div className='mt-3'>
         <span className='inline-block w-full text-center bg-green-600/20 border border-green-600/40 rounded-md text-green-200 py-2'>Completed</span>
    </div>
</div>
  )
}

export default CompleteTask