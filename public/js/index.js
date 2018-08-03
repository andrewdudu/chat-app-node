var socket = io();

socket.on('connect', function () {
  console.log('New user connected');

  socket.emit('createMessage', {
    from: 'Admin',
    text: 'New user connected'
  }, function () {

  })
})

socket.on('newMessage', function (message) {
  console.log('You got new message ', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  })
})
