import React from 'react'

const NewTask = ({data}) => {
  
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 py-5 px-5 rounded-xl '>
               <div className="flex justify-between items-center ">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded text-white " >{data.category} </h3>
                <h4 className="text-white text-sm">{data.date}</h4>
               </div>
               <h2 className="mt-5 text-2xl font-semibold text-white ">{data.title} </h2>
               <p className="text-sm mt-2">
                  {data.description}
                  </p>
               <div className='mt-4'>
                <button className='w-full bg-yellow-400 rounded'>Accept Task</button>

               </div>
           </div>
  )
}

export default NewTask