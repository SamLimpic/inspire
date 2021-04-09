import Cloud from "./Models/Cloud.js"
import Task from "./Models/Task.js"
import Quote from "./Models/Quote.js"
import Background from "./Models/Background.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /**@type {Background[]} */
  backgrounds = []

  /** @type {Cloud[]} */
  clouds = []

  /** @type {Quote[]} */
  quotes = []

  /** @type {Task[]} */
  tasks = []

}

// NOTE MAGIC!  NO TOUCHY!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
