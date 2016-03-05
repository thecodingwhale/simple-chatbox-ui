
import $ from 'jquery'
import ChatBoxModel from './model'
import ChatBoxView from './view'
import ChatBoxController from './controller'

class ChatBox {
    constructor() {
        const model = new ChatBoxModel()
        const view = new ChatBoxView(model, {
            el: $('[role~="chat-box"]'),
            loader: $('[role~="chat-box-loader"]'),
            header: $('[role~="chat-box-header"]'),
            body: $('[role~="chat-box-users"]')
        })
        const controller = new ChatBoxController(model, view);
        view.init()
    }
}

export { ChatBox as default }