import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"
import { kanyeApi } from "./AxiosService.js"

class QuotesService {
    async getQuotes() {
        let res = await kanyeApi.get('')
        ProxyState.quotes = new Quote(res.data)
    }
}

export const quotesService = new QuotesService()

