var socket = io();

socket.on('connect', function () {
  console.log('New user connected');

  socket.emit('createMessage', {
    from: 'andrewdudu',
    text: 'Hi from andrew'
  })
})

socket.on('newMessage', function (message) {
  console.log('You got new message ', message);
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})