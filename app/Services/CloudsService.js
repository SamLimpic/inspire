import { ProxyState } from "../AppState.js"
import Cloud from "../Models/Cloud.js"
import { sandboxApi } from "./AxiosService.js"

class CloudsService {
    toggleTemp() {
        let toggle = document.getElementById('temp').innerText
        if (toggle == `${ProxyState.clouds.f}°`) {
            document.getElementById('temp').innerText = `${ProxyState.clouds.c}`
        } else if (toggle == `${ProxyState.clouds.c}°`) {
            document.getElementById('temp').innerText = `${ProxyState.clouds.f}`
        }
        console.log(toggle)
    }
    async getClouds() {
        let res = await sandboxApi.get('weather')
        ProxyState.clouds = new Cloud(res.data)
    }

}

export const cloudsService = new CloudsService()

