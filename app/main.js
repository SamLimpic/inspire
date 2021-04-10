import BackgroundsController from "./Controllers/BackgroundsController.js"
import ClocksController from "./Controllers/ClocksController.js"
import CloudsController from "./Controllers/CloudsController.js"
import QuotesController from "./Controllers/QuotesController.js"
import TasksController from "./Controllers/TasksController.js"

class App {

  backgroundsController = new BackgroundsController()

  cloudsController = new CloudsController()

  quotesController = new QuotesController()

  tasksController = new TasksController()

  clocksController = new ClocksController()

}

window["app"] = new App()
