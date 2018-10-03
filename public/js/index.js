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
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var li = jQuery('<li></li>');
  li.text(`${message.from} ${formattedTime}: ${message.text}`);

  jQuery('#messages').append(li);
})

socket.on('newLocation', function (location) {
  console.log('Location ', location);
  var formattedTime = moment(location.createdAt).format('h:mm a');
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My current location</a>');
  li.text(`${location.from} ${formattedTime}: `);
  a.attr('href', location.url);
  li.append(a);

  jQuery('#messages').append(li);
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  let messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {
    messageTextbox.val('');
  })
})

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your Browser')
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function(position) {
    locationButton.removeAttr('disabled').text('Send Location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function() {
    locationButton.removeAttr('disabled').text('Send Location');
    alert('Unable to fetch location');
  })
})
