import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"


//Private
function _draw() {
  let tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(v => template += v.Template)
  document.getElementById("tasks").innerHTML = /*html*/`

  `
  console.log(tasks)
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw)

    this.getTasks()
  }

  async getTasks() {
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.error(error)
    }
  }

}
