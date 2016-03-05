
function getAvatar(user) {
    const username = user.username
    const avatar = username.charAt(0)

    if (typeof user.profileimage !== 'undefined') {
        return `<img src="${user.profileimage}" alt="${username}">`
    }

    return avatar
}

class ChatBoxTemplate {
    static userList(user) {
        const name = user.username
        const status = (user.status !== 'Offline') ? 'online' : 'offline'
        const avatar = getAvatar(user)

        return `<div class="chat-box__user">
            <div class="chat-box__user_avatar">
                ${avatar}
            </div>
            <div class="chat-box__user_details">
                <div class="chat-box__user_name">
                    ${name}
                </div>
                <span class="chat-box__user_status chat-box__user_status--${status}"></span>
            </div>
        </div>`
    }
}

export { ChatBoxTemplate as default }