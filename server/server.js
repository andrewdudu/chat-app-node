const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const port = proccess.env.PORT || 3001;

var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
