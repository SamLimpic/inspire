import { ProxyState } from "../AppState.js"
import { backgroundsService } from "../Services/BackgroundsService.js"


//Private
function _draw() {
  let backgrounds = ProxyState.backgrounds
  let template = ''
  backgrounds.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`

  `
}

//Public
export default class BackgroundsController {
  constructor() {
    ProxyState.on("backgrounds", _draw)

  }

}
