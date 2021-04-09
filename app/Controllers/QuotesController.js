import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"


//Private
function _draw() {
  let quotes = ProxyState.quotes
  let template = ''
  quotes.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`

  `
}

//Public
export default class QuotesController {
  constructor() {
    ProxyState.on("quotes", _draw)

  }

}
