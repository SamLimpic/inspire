import { ProxyState } from "../AppState.js"
import { cloudsService } from "../Services/CloudsService.js"


//Private
function _draw() {
  let clouds = ProxyState.clouds
  document.getElementById("clouds").innerHTML = /*html*/`
    <div class="row align-content-end pr-3">
        <div class="col text-center mb-0 pb-0">
            <h1 class="m-0 p-0"><u>${clouds.description}</u></h1>
        </div>
    </div>
    <div class="row justify-content-center pr-5">
        <div class="col-4 m-0 p-0 text-right">
            <img class="img-fluid m-0 p-0" src="http://openweathermap.org/img/wn/${clouds.icon}.png" alt="" onclick="app.cloudsController.toggleTemp()">
        </div>
        <div class="col-4 align-self-center text-center m-0 p-0">
            <h2 class="m-0 p-0" id="temp">${clouds.toggle}°</h2>
        </div>
        <div class="col-4  align-self-center m-0 p-0">
            <h1 class="m-0 p-0">${clouds.name}</h1>
        </div>
    </div>
  `
  console.log(clouds)
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
