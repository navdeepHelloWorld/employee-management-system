import React from "react";

const TaskList = ()=>{

    return(
        <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5  w-full mt-10 rounded-xl'>
           <div className='h-full flex-shrink-0 w-[300px] bg-red-400 py-5 px-5 rounded-xl '>
               <div className="flex justify-between items-center ">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded text-white " > High</h3>
                <h4 className="text-white text-sm">18 june 2025</h4>
               </div>
               <h2 className="mt-5 text-2xl font-semibold text-white ">Make a youtube video</h2>
               <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias nam impedit maiores, officiis dolorem quo velit sunt atque inventore error quaerat nesciunt dolorum magnam recusandae vitae vel earum expedita.
               </p>
           </div>
           <div className='h-full flex-shrink-0 w-[400px] bg-blue-400 py-5 px-5 rounded-xl '>
               <div className="flex justify-between items-center ">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded text-white " > High</h3>
                <h4 className="text-white text-sm">18 june 2025</h4>
               </div>
               <h2 className="mt-5 text-2xl font-semibold text-white ">Make a youtube video</h2>
               <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias nam impedit maiores, officiis dolorem quo velit sunt atque inventore error quaerat nesciunt dolorum magnam recusandae vitae vel earum expedita.
               </p>
           </div>
           <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 py-5 px-5 rounded-xl '>
               <div className="flex justify-between items-center ">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded text-white " > High</h3>
                <h4 className="text-white text-sm">18 june 2025</h4>
               </div>
               <h2 className="mt-5 text-2xl font-semibold text-white ">Make a youtube video</h2>
               <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias nam impedit maiores, officiis dolorem quo velit sunt atque inventore error quaerat nesciunt dolorum magnam recusandae vitae vel earum expedita.
               </p>
           </div>
           <div className='h-full flex-shrink-0 w-[300px] bg-green-400 py-5 px-5 rounded-xl '>
               <div className="flex justify-between items-center ">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded text-white " > High</h3>
                <h4 className="text-white text-sm">18 june 2025</h4>
               </div>
               <h2 className="mt-5 text-2xl font-semibold text-white ">Make a youtube video</h2>
               <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias nam impedit maiores, officiis dolorem quo velit sunt atque inventore error quaerat nesciunt dolorum magnam recusandae vitae vel earum expedita.
               </p>
           </div>
          
           
           
        </div>
    )
}

export default TaskList