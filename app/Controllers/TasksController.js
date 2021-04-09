import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"


//Private
function _draw() {
  let tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`

  `
}

//Public
export default class TasksController {
  constructor() {
    ProxyState.on("tasks", _draw)

  }

}
