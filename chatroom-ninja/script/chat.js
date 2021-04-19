console.log('--- chat.js ---')

class Chatroom {
  constructor(room, username) {
    this.room = room
    this.username = username
    this.chats = db.collection('chats')
  }

  async addChat(message) {
    const now = new Date()
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    }

    // save the chat document
    const response = await this.chats.add(chat)
    return response
  }

  getChats(callback) {
    this.chats.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          // update the UI
          callback(change.doc.data())
        }
      })
    })
  }
}

const chatroom = new Chatroom('gaming', 'firat')
// console.log(chatroom)
// chatroom
//   .addChat('Hello Everyone')
//   .then(() => console.log('chat added'))
//   .catch((err) => console.log(err))

chatroom.getChats((data) => {
  console.log(data)
})
