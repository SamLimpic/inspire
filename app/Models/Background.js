export default class Background {
    constructor(id) {
        this.id = id
        this.url = id.large_url
        this.source = id.site
    }
}

//#region BACKGROUND API
// {
//     "id": 198,
//     "url": "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_myebqg9yA81st5lhmo1_1280.jpg",
//     "large_url": "https://splashbase.s3.amazonaws.com/unsplash/large/K6loAn",
//     "source_id": 105,
//     "copyright": "CC0",
//     "site": "unsplash"
// }
//#endregion