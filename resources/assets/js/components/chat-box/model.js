
import request from 'superagent'
import Promise from 'promise'

class ChatBoxModel {
    getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                request
                    .get('/api/users.json')
                    .end((err, res) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(res.body)
                        }
                    })
            }, 5000)
        })
    }
}

export { ChatBoxModel as default }