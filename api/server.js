const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  Promise = require('bluebird'),
  mongoose = require('mongoose'),
  server = require('http').createServer(app),
  CodeGenerator = require('./codegenerator.js'),
  io = require('socket.io')(server);

mongoose.Promise = Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(`${__dirname}/../dist`));

// CORS settings
app.all('*', require('./cors.js')());

var rooms = [];

io.on('connection', socket => {
  console.log('A user connected');
  socket.on('created_room', data => {
    rooms[data.room] = {
      creator: data.creator
    };

    socket.join(data.room);
  });

  socket.on('user_entered', data => {
    rooms[data.room] = {
      opponent: data.opponent
    };

    socket.join(data.room);
    io.to(data.room).emit('play');
  });
});

app.get('/api/code', (req, res) => {
  // change CodeGenerator to Room
  res.json({ code: CodeGenerator.generate() });
});

// Error handiling
require('./error.handler.js')(app);

server.listen(process.env.PORT || 3000, () => {
  console.log('Service started');
});
