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

  socket.emit('newMessage', {
    text: 'Hi from andrew 2',
    from: 'Andrew',
    createdAt: new Date()
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage ', message);
  })

  socket.on('disconnect', () => {
    console.log('Disconnected');
  })
})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
