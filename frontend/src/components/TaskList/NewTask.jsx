import React from 'react'

const NewTask = ({data, onAccept}) => {
  
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-[#1b1d22] border border-white/10 border-l-4 border-l-blue-500 py-5 px-5 rounded-xl shadow-sm'>
               <div className="flex justify-between items-center ">
                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-200 border border-blue-500/30">{data.category}</span>
                <span className="text-xs text-gray-400">{data.date}</span>
               </div>
               <h2 className="mt-4 text-xl font-semibold text-white ">{data.title} </h2>
               <p className="text-sm mt-2 text-gray-300">
                  {data.description}
               </p>
               <div className='mt-4'>
                <button onClick={onAccept} className='w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-md py-2 transition-colors'>Accept Task</button>

               </div>
           </div>
  )
}

export default NewTask