import { ProxyState } from "../AppState.js"
import { clocksService } from "../Services/ClocksService.js"


//Private

//Public
export default class BackgroundsController {
    constructor() {
        this.setTime()
    }

    setTime() {
        clocksService.setTime()

    }
}