import { ProxyState } from "../AppState.js"
import Cloud from "../Models/Cloud.js"
import { sandboxApi } from "./AxiosService.js"

class CloudsService {
    async getClouds() {
        let res = await sandboxApi.get('weather')
        ProxyState.clouds = new Cloud(res.data)
    }

}

export const cloudsService = new CloudsService()

