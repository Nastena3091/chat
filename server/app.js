const app = require('express')()
const express = require('express')
const bodyParser = require('body-parser')
// const http = require('http')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const router = require('./routers')
const m = (name, text, id)=>({name, text, id})
// const axios = require('axios').default

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );
app.use(express.json())
app.use('/api', router)

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
    // .then(function(res){
    //   console.log(res.data)
    //   socket.emit('newMessage', m('admin',`Ласкаво просимо ${res.data.name}`))
    //   socket.broadcast.to('1').emit('newMessage', m(data.name,`Користувач ${res.data.name} приєднався`, res.data._id))
    // }).catch(function(err){
    //   console.log(err)
    // })
    
})
})

module.exports = {
  app,
  server
}
