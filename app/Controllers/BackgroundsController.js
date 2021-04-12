import { ProxyState } from "../AppState.js"
import { backgroundsService } from "../Services/BackgroundsService.js"


//Private
function _draw() {
  let backgrounds = ProxyState.backgrounds
  document.body.style.backgroundImage = `url(${backgrounds.url})`
}

//Public
export default class BackgroundsController {
  constructor() {
    ProxyState.on("backgrounds", _draw)

    this.getBackgrounds()
  }

  async getBackgrounds() {
    try {
      await backgroundsService.getBackgrounds()
    } catch (error) {
      console.error(error)
    }
  }

}