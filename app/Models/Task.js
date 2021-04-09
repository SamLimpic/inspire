export default class Task {
    constructor(_id, completed, description) {
        this.id = _id
        this.completed = completed
        this.description = description
    }

    get Template() {

        return /*html*/`

        `
    }
}

//#region TASKS API
// {
//     //the server will create these properties for you
//     _id: { type: String, required: true, unique: true }
//     completed: { type: Boolean, required: true, default: false },
//     user: { type: String, required: true },

//     //You will need to provide a description
//     description: { type: String, required: true },
// }
//#endregion