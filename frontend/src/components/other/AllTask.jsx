import { useContext } from "react";
import React from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
    const authData = useContext(AuthContext)

    if (!authData || !authData.employees) {
        return (
            <div className="bg-[#16181b] border border-white/5 p-5 mt-6 rounded-xl h-auto">
                <div className="text-center text-gray-300">Loading employee data...</div>
            </div>
        )
    }

    return (
        <div className="bg-[#16181b] border border-white/5 p-5 mt-6 rounded-xl h-auto">
            <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg mb-3 px-4 py-3">
                <h2 className="w-1/5 text-sm font-semibold text-gray-300 tracking-wide uppercase">Employee</h2>
                <h3 className="w-1/5 text-sm font-semibold text-gray-300 tracking-wide uppercase">New</h3>
                <h5 className="w-1/5 text-sm font-semibold text-gray-300 tracking-wide uppercase">Active</h5>
                <h5 className="w-1/5 text-sm font-semibold text-gray-300 tracking-wide uppercase">Completed</h5>
                <h5 className="w-1/5 text-sm font-semibold text-gray-300 tracking-wide uppercase">Failed</h5>
            </div>
            
            <div id="AllTask" className="h-[80%]">
                {authData.employees.map((elem, idx) => (
                    <div key={elem.id || idx} className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg mb-2 px-4 py-3">
                        <h2 className="w-1/5 text-base font-medium text-white">{elem.firstName}</h2>
                        <h3 className="w-1/5 text-base font-medium text-blue-300">{elem.taskStats.new}</h3>
                        <h5 className="w-1/5 text-base font-medium text-yellow-300">{elem.taskStats.active}</h5>
                        <h5 className="w-1/5 text-base font-medium text-green-300">{elem.taskStats.completed}</h5>
                        <h5 className="w-1/5 text-base font-medium text-red-300">{elem.taskStats.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask 