export default class Cloud {
    constructor({ name, weather, main }) {
        this.id = weather[0].id
        this.description = weather[0].description
        this.temp = main.temp
        this.name = name
        this.icon = weather[0].icon
        this.c = Math.floor(this.temp - 273)
        this.f = Math.floor(this.c * (9 / 5) + 32)
    }

    get Template() {

        return /*html*/`
    <div class="row align-content-end pr-3">
        <div class="col text-center mb-0 pb-0">
            <h1 class="m-0 p-0"><u>${this.description}</u><small> in </small><u>${this.name}</u></h1>
        </div>
    </div>
    <div class="row justify-content-around pr-5">
        <div class="col-6 align-self-center text-right m-0 p-0">
            <h1 class="m-0 p-0" id="temp">${this.f}°F</h1>
        </div>
        <div class="col-6 m-0 p-0 text-right">
            <img class="img-fluid m-0 p-0 action" src="http://openweathermap.org/img/wn/${this.icon}.png" alt="" onclick="app.cloudsController.toggleTemp()">
        </div>
    </div>
        `
    }
}

//#region CLOUDS API
// {
//     "coord": {
//         "lon": -116.2035,
//             "lat": 43.6135
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//         "base": "stations",
//             "main": {
//         "temp": 285,
//             "feels_like": 282.82,
//                 "temp_min": 282.04,
//                     "temp_max": 287.04,
//                         "pressure": 1022,
//                             "humidity": 22
//     },
//     "visibility": 10000,
//         "wind": {
//         "speed": 3.6,
//             "deg": 140
//     },
//     "clouds": {
//         "all": 1
//     },
//     "dt": 1617996801,
//         "sys": {
//         "type": 1,
//             "id": 3479,
//                 "country": "US",
//                     "sunrise": 1617973889,
//                         "sunset": 1618021237
//     },
//     "timezone": -21600,
//         "id": 5586437,
//             "name": "Boise",
//                 "cod": 200
// }
//#endregion