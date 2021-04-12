import { ProxyState } from "../AppState.js"
import Cloud from "../Models/Cloud.js"
import { sandboxApi } from "./AxiosService.js"

class CloudsService {
    toggleTemp() {
        let toggle = document.getElementById('temp').innerText
        if (toggle == `${ProxyState.clouds.f}°F`) {
            document.getElementById('temp').innerText = `${ProxyState.clouds.c}°C`
        } else if (toggle == `${ProxyState.clouds.c}°C`) {
            document.getElementById('temp').innerText = `${ProxyState.clouds.f}°F`
        }
        console.log(toggle)
    }
    async getClouds() {
        let res = await sandboxApi.get('weather')
        ProxyState.clouds = new Cloud(res.data)
    }

}

export const cloudsService = new CloudsService()

