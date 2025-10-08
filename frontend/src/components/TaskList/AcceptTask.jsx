import React from 'react'

const AcceptTask = ({data, onComplete, onFail}) => {
 
    return (
        <div>
            <div className='h-full flex-shrink-0 w-[300px] bg-[#1b1d22] border border-white/10 border-l-4 border-l-yellow-400 py-5 px-5 rounded-xl shadow-sm '>
                <div className="flex justify-between items-center ">
                    <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-200 border border-yellow-500/30" > {data.category}</span>
                    <span className="text-xs text-gray-400">{data.date}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white ">{data.title}</h2>
                <p className="text-sm mt-2 text-gray-300">
                    {data.description}
                </p>
                <div className='flex justify-between mt-4 gap-2'>
                    <button onClick={onComplete} className='flex-1 bg-emerald-600 hover:bg-emerald-700 py-2 text-sm rounded-md text-white transition-colors' >Mark Completed</button>
                    <button onClick={onFail} className='flex-1 bg-red-600 hover:bg-red-700 py-2 text-sm rounded-md text-white transition-colors' >Mark Failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask