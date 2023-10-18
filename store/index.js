export const state = () => ({
  user:{},
  messages:[]
})
export const mutations = {
  setUser(state, user){
    state.user=user
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
  }
}

