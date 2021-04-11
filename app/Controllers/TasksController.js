import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"


//Private
function _draw() {
  let tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(task => template += task.Template)
  document.getElementById("tasks").innerHTML = template
  console.log(tasks)
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw)

    this.getTasks()
  }

  async addTask() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let newTask = {
        description: form['task'].value,
      }
      await tasksService.addTask(newTask)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteTask(id) {
    try {
      await tasksService.deleteTask(id)
    } catch (error) {
      console.error(error)
    }
  }

  async getTasks() {
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.error(error)
    }
  }

  async boxCheck(id) {
    try {
      await tasksService.boxCheck(id)
    } catch (error) {
      console.error(error)
    }
  }

}
