const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const m = (name, text, id)=>({name, text, id})

io.on('connection', socket => {
  console.log('IO Connected')

  socket.on('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + ' SERVER'
      })
    }, 500)
  })
  socket.on('SignUp',(data,cb)=>{
    if (!data.name || !data.email || !data.password){
      return cb ('Дані неправильні')
    }
    socket.join('1')
    cb({userId: socket.id})
    socket.emit('newMessage', m('admin',`Ласкаво просимо ${data.name}`))
    socket.broadcast.to('1').emit('newMessage', m('admin',`Користувач ${data.name} приєднався`))
})
})

module.exports = {
  app,
  server
}
