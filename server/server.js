const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var {generateMessage, generateLocationMessage} = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage ', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  })

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocation', generateLocationMessage('Admin', coords.latitude, coords.longitude))
  })

  socket.on('disconnect', () => {
    console.log('Disconnected');
  })
})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
