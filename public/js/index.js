var socket = io();

socket.on('connect', function () {
  console.log('New user connected');
})

socket.on('newMessage', function (message) {
  console.log('You got new message ', message);
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

socket.on('welcomeMessage', function (message) {
  console.log(message.text)
  console.log('From ', message.from)
})