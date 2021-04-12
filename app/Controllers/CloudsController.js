import { ProxyState } from "../AppState.js"
import { cloudsService } from "../Services/CloudsService.js"


//Private
function _draw() {
  let clouds = ProxyState.clouds
  document.getElementById("clouds").innerHTML = clouds.Template
}

//Public
export default class CloudsController {
  constructor() {
    ProxyState.on("clouds", _draw)

    this.getClouds()
  }

  async getClouds() {
    try {
      await cloudsService.getClouds()
    } catch (error) {
      console.error(error)
    }
  }

  toggleTemp() {
    cloudsService.toggleTemp()
  }
}
