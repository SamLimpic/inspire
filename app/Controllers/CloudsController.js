import { ProxyState } from "../AppState.js"
import { cloudsService } from "../Services/CloudsService.js"


//Private
function _draw() {
  let clouds = ProxyState.clouds
  let template = ''
  clouds.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`

  `
}

//Public
export default class CloudsController {
  constructor() {
    ProxyState.on("clouds", _draw)

  }

}
