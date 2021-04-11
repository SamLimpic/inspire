export default class Task {
    constructor({ description, id = null, completed = null, user = null }) {
        this.id = id
        this.completed = completed
        this.user = user
        this.description = description
    }

    get Template() {
        return /*html*/`
            <div class=" input-group-prepend align-items-center">
                <i class="fas fa-times text-danger delete-size" onclick="app.tasksController.deleteTask('${this.id}')"></i>
                <div class="input-group-text bg-transparent" style="border: none">
                    <input id="${this.id}" type="checkbox" aria-label="Task Checkbox" value="1" onclick="app.tasksController.boxCheck('${this.id}')" ${this.completed ? "checked" : ""}>
                </div>
                <a class="pb-1 my-0"><strong>${this.description}</strong></a>
            </div>
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