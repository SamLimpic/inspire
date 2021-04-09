import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"

class TasksService {
    async getTasks() {
        let tasks = ProxyState.tasks
        let res = await sandboxApi.get('Samwise/todos')
        ProxyState.tasks = [...tasks, new Task(res.data)]
    }
}

export const tasksService = new TasksService()

