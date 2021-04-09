export default class Quote {
    constructor(id) {
        this.id = id._id
        this.content = id.content
        this.author = id.author
    }

    get Template() {

        return /*html*/`

        `
    }
}

//#region QUOTES API
// {
//     "_id": "6Nwqa1uVLe",
//         "tags": [
//             "friendship"
//         ],
//             "content": "Friendship improves happiness and abates misery, by the doubling of our joy and the dividing of our grief.",
//                 "author": "Cicero",
//                     "authorSlug": "cicero",
//                         "length": 106
// }
//#endregion