import { useContext } from "react";
import React from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const authData = useContext(AuthContext)

    return (
        <div  className=" bg-[#1c1c1c] p-5 mt-5 rounded h-auto ">
            <div className="flex justify-between border rounded bg-red-400 mb-2 px-4 py-2">
                <h2 className="w-1/5 text-lg font-medium   ">Employee</h2>
                <h3 className="w-1/5 text-lg font-medium  ">New Task</h3>
                <h5 className="w-1/5 text-lg font-medium  ">Active Task</h5>
                <h5 className="w-1/5 text-lg font-medium  ">Completed</h5>
                <h5 className="w-1/5 text-lg font-medium  ">Failed</h5>

            </div>
            <div id="AllTask" className="h-[80%] ">
                {authData.employees.map((elem,idx) => {
                    return (
                        <div key={idx} className="flex justify-between   border rounded  mb-2 px-4 py-2">
                            <h2 className="w-1/5 text-lg font-medium  ">{elem.firstName}</h2>
                            <h3 className="w-1/5 text-lg font-medium text-blue-600">{elem.taskStats.new}</h3>
                            <h5 className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskStats.active}</h5>
                            <h5 className="w-1/5 text-lg font-medium text-white-500">{elem.taskStats.completed}</h5>
                            <h5 className="w-1/5 text-lg font-medium text-red-600">{elem.taskStats.failed}</h5>

                        </div>
                    )
                })}
            </div>




        </div>
    )
}

export default AllTask 