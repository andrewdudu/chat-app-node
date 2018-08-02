const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.emit('welcomeMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app'
  })
  socket.broadcast.emit('welcomeMessage', {
    from: 'Admin',
    text: 'New user joined'
  })

  socket.on('createMessage', (message) => {
    console.log('createMessage ', message);

    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })

    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
  })

  socket.on('disconnect', () => {
    console.log('Disconnected');
  })
})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
