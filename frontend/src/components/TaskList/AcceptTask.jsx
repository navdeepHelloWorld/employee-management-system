import React from 'react'

const AcceptTask = ({data}) => {
 
    return (
        <div>
            <div className='h-full flex-shrink-0 w-[300px] bg-red-400 py-5 px-5 rounded-xl '>
                <div className="flex justify-between items-center ">
                    <h3 className="bg-red-500 text-sm px-3 py-1 rounded text-white " > {data.category}</h3>
                    <h4 className="text-white text-sm">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-white ">{data.title}</h2>
                <p className="text-sm mt-2">
                    {data.description}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 py-1 px-2 text-sm rounded ' >Mark as Completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm rounded' >Mark as Failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask