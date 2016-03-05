import $ from 'jquery'
import ChatBoxTemplate from './template'

class ChatBoxController {
    constructor(model, view) {
        this._model = model
        this._view = view
        this._template = ChatBoxTemplate

        this.fetchUsers()
            .then(users => {
                const tempArray = []
                for (let user of users) {
                    tempArray.push(this.renderUserList(user))
                }
                this.renderUserChatLists(tempArray.join(""))
            })
    }
    fetchUsers() {
        const result = this._model.getUsers()
        return result.then((res) => {
            return (typeof res.users !== 'undefined') ? res.users : []
        })
    }
    renderUserChatLists(userLists) {
        this._view._element.body.html(userLists)
    }
    renderUserList(user) {
        this._view._element.loader.addClass('hide')
        return this._template.userList(user)
    }
}

export { ChatBoxController as default }