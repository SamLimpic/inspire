import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"


//Private
function _draw() {
  let quotes = ProxyState.quotes
  document.getElementById("quotes").innerText = /*html*/`
  ${quotes.quote}
  `
  console.log(quotes)
}

//Public
export default class QuotesController {
  constructor() {
    ProxyState.on("quotes", _draw)

    this.getQuotes()
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error(error)
    }
  }

}
