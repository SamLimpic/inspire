import { ProxyState } from "../AppState.js"
import Background from "../Models/Background.js"
import { sandboxApi } from "./AxiosService.js"

class BackgroundsService {
    async getBackgrounds() {
        let res = await sandboxApi.get('images')
        ProxyState.backgrounds = new Background(res.data)
    }

}

export const backgroundsService = new BackgroundsService()

