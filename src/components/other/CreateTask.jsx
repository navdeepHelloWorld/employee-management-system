
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });
    
    const authData = useContext(AuthContext);
    
    // Get current date for min date validation
    const today = new Date().toISOString().split('T')[0];
    
    const resetForm = () => {
        setTaskTitle("");
        setTaskDescription("");
        setTaskDate("");
        setAssignTo("");
        setCategory("");
    };
    
    const submitHandler = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!taskTitle.trim() || !taskDescription.trim() || !taskDate || !assignTo.trim() || !category.trim()) {
            setMessage({ text: "Please fill in all fields", type: "error" });
            return;
        }
        
        if (taskDate < today) {
            setMessage({ text: "Task date cannot be in the past", type: "error" });
            return;
        }
        
        setIsSubmitting(true);
        setMessage({ text: "", type: "" });
        
        try {
            // Get current employees data
            const employeesData = JSON.parse(localStorage.getItem("employees")) || [];
            
            // Find the employee to assign the task to
            const employeeIndex = employeesData.findIndex(emp => emp.firstName === assignTo);
            
            if (employeeIndex === -1) {
                setMessage({ text: "Employee not found", type: "error" });
                return;
            }
            
            // Create new task
            const newTask = {
                id: Date.now(), // Simple ID generation
                title: taskTitle.trim(),
                description: taskDescription.trim(),
                date: taskDate,
                category: category.trim(),
                assignTo: assignTo.trim(),
                action: false,
                newTask: true,
                completed: false,
                failed: false,
                createdAt: new Date().toISOString()
            };
            
            // Add task to employee
            employeesData[employeeIndex].tasks.push(newTask);
            
            // Update task stats
            employeesData[employeeIndex].taskStats.new += 1;
            
            // Save back to localStorage
            localStorage.setItem("employees", JSON.stringify(employeesData));
            
            // Update context
            if (authData) {
                authData.employees = employeesData;
            }
            
            setMessage({ text: "Task created successfully!", type: "success" });
            resetForm();
            
            // Clear success message after 3 seconds
            setTimeout(() => setMessage({ text: "", type: "" }), 3000);
            
        } catch (error) {
            console.error("Error creating task:", error);
            setMessage({ text: "Failed to create task. Please try again.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    if (!authData || !authData.employees) {
        return (
            <div className="p-5 bg-[#1c1c1c] rounded mt-8">
                <div className="text-center text-white">Loading employee data...</div>
            </div>
        );
    }
    
    return (
        <div className="p-5 bg-[#1c1c1c] rounded mt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Create New Task</h2>
            
            {message.text && (
                <div className={`mb-4 p-3 rounded ${
                    message.type === "success" ? "bg-green-500" : "bg-red-500"
                } text-white text-center`}>
                    {message.text}
                </div>
            )}
            
            <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between gap-6">
                <div className="w-full lg:w-1/2">
                    <div className="mb-4">
                        <h3 className="text-sm text-gray-300 mb-2">Task Title *</h3>
                        <input 
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            type="text" 
                            placeholder="UI Design"
                            className="w-full text-sm py-2 px-3 outline-none bg-transparent text-white border border-gray-400 rounded focus:border-emerald-400 transition-colors"
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="mb-4">
                        <h3 className="text-sm text-gray-300 mb-2">Date *</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            type="date" 
                            min={today}
                            className="w-full text-sm py-2 px-3 outline-none bg-transparent text-white border border-gray-400 rounded focus:border-emerald-400 transition-colors"
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div className="mb-4">
                        <h3 className="text-sm text-gray-300 mb-2">Assign To *</h3>
                        <select
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="w-full text-sm py-2 px-3 outline-none bg-transparent text-white border border-gray-400 rounded focus:border-emerald-400 transition-colors"
                            disabled={isSubmitting}
                        >
                            <option value="">Select Employee</option>
                            {authData.employees.map((emp) => (
                                <option key={emp.id} value={emp.firstName}>
                                    {emp.firstName}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="mb-4">
                        <h3 className="text-sm text-gray-300 mb-2">Category *</h3>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full text-sm py-2 px-3 outline-none bg-transparent text-white border border-gray-400 rounded focus:border-emerald-400 transition-colors"
                            disabled={isSubmitting}
                        >
                            <option value="">Select Category</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Testing">Testing</option>
                            <option value="Documentation">Documentation</option>
                            <option value="Bug Fix">Bug Fix</option>
                            <option value="Feature">Feature</option>
                            <option value="Meeting">Meeting</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="w-full lg:w-2/5">
                    <h3 className="text-sm text-gray-300 mb-2">Description *</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        placeholder="Describe your task in detail..."
                        className="w-full h-44 text-sm py-3 px-4 outline-none bg-transparent text-white border border-gray-400 rounded focus:border-emerald-400 transition-colors resize-none"
                        rows="10"
                        disabled={isSubmitting}
                    />
                    
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-sm text-black px-5 py-3 mt-4 bg-emerald-400 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors">
                        {isSubmitting ? "Creating Task..." : "Create Task"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;