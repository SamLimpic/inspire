import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"

class TasksService {
    async deleteTask(id) {
        await sandboxApi.delete(`Samwise/todos/${id}`)
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id !== id)
    }
    async addTask(newTask) {
        let res = await sandboxApi.post('Samwise/todos', newTask)
        let task = new Task(res.data)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

    async getTasks() {
        let res = await sandboxApi.get('Samwise/todos')
        ProxyState.tasks = res.data.map(task => new Task(task))
    }

    async boxCheck(id) {
        let task = ProxyState.tasks.find(task => task.id == id)
        task.completed ? task.completed = false : task.completed = true
        await sandboxApi.put(`Samwise/todos/${id}`, task)
        ProxyState.tasks = ProxyState.tasks
    }
}

export const tasksService = new TasksService()

