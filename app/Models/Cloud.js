export default class Cloud {
    constructor({ name, weather, main }) {
        this.id = weather.id
        this.description = weather.description
        this.temp = main.temp
        this.name = name
        this.icon = weather.icon

    }

    get Template() {

        return /*html*/`

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