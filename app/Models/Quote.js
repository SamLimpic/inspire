export default class Quote {
    constructor(id, content, author) {
        this.id = id
        this.content = content
        this.author = author
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