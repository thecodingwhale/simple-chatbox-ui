
class ChatBoxView {
    constructor(model, element) {
        this._model = model
        this._element = element
    }
    init () {
        this._element.header.on('click', e => {
            this.toggle()
        })
    }
    toggle() {
        if (this._element.el.hasClass('chat-box--close')) {
            this._element.el.removeClass('chat-box--close')
        } else {
            this._element.el.addClass('chat-box--close')
        }
    }
}

export { ChatBoxView as default }