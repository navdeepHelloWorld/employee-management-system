import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { updateTaskStatusApi } from "../../utils/api";

const TaskList = ({ data }) => {
    const auth = useContext(AuthContext)
    if (!data || !data.tasks || !Array.isArray(data.tasks)) {
        return (
            <div className="h-[55%] flex items-center justify-center text-white">
                No tasks available
            </div>
        )
    }

    const updateTaskByIndex = (taskIndex, updater) => {
        if (!auth || !auth.updateEmployees) return
        auth.updateEmployees((employees) => {
            const employeeIndex = employees.findIndex((e) => e.id === data.id)
            if (employeeIndex === -1) return employees
            const targetEmployee = employees[employeeIndex]
            const nextTasks = targetEmployee.tasks.map((t, i) => (i === taskIndex ? updater(t) : t))
            // recompute stats
            const nextStats = nextTasks.reduce(
                (acc, t) => {
                    if (t.newTask) acc.new += 1
                    if (t.action) acc.active += 1
                    if (t.completed) acc.completed += 1
                    if (t.failed) acc.failed += 1
                    return acc
                },
                { new: 0, active: 0, completed: 0, failed: 0 }
            )
            const nextEmployee = { ...targetEmployee, tasks: nextTasks, taskStats: nextStats }
            const nextEmployees = employees.slice()
            nextEmployees[employeeIndex] = nextEmployee
            return nextEmployees
        })
    }

    const syncStatusIfId = async (task, nextStatus) => {
        // If this task comes from API (has _id), sync to backend
        if (task && task._id) {
            try {
                await updateTaskStatusApi(task._id, nextStatus)
            } catch {}
        }
    }

    const renderTask = (task, index) => {
        // Priority order: completed > failed > active > new
        if (task.completed) {
            return <CompleteTask key={`${task.title}-${index}`} data={task} />
        }
        if (task.failed) {
            return <FailedTask key={`${task.title}-${index}`} data={task} />
        }
        if (task.action) {
            const onComplete = async () => {
                await syncStatusIfId(task, 'completed')
                updateTaskByIndex(index, (t) => ({ ...t, action: false, newTask: false, completed: true, failed: false }))
            }
            const onFail = async () => {
                await syncStatusIfId(task, 'failed')
                updateTaskByIndex(index, (t) => ({ ...t, action: false, newTask: false, completed: false, failed: true }))
            }
            return <AcceptTask key={`${task.title}-${index}`} data={task} onComplete={onComplete} onFail={onFail} />
        }
        if (task.newTask) {
            const onAccept = async () => {
                await syncStatusIfId(task, 'active')
                updateTaskByIndex(index, (t) => ({ ...t, action: true, newTask: false }))
            }
            return <NewTask key={`${task.title}-${index}`} data={task} onAccept={onAccept} />
        }
        
        // Default case - show as new task
        const onAccept = async () => {
            await syncStatusIfId(task, 'active')
            updateTaskByIndex(index, (t) => ({ ...t, action: true, newTask: false }))
        }
        return <NewTask key={`${task.title}-${index}`} data={task} onAccept={onAccept} />
    }

    return (
        <div id="tasklist"   className="grid gap-5 mt-10 py-5 w-full rounded-xl overflow-y-auto h-[55%] grid-cols-[repeat(auto-fit,minmax(250px,1fr))]" >

            {data.tasks.length === 0 ? (
                <div className="text-white text-center w-full">
                    No tasks assigned yet
                </div>
            ) : (
                data.tasks.map((task, index) => renderTask(task, index))
            )}
        </div>
    )
}

export default TaskList