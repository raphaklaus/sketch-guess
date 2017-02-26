const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  Promise = require('bluebird'),
  mongoose = require('mongoose'),
  server = require('http').createServer(app),
  CodeGenerator = require('./codegenerator.js'),
  io = require('socket.io')(server);

// mongoose.connect(process.env.MONGO_URL);
mongoose.Promise = Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(`${__dirname}/../dist`));

// CORS settings
app.all('*', require('./cors.js')());

io.on('connection', socket => {
  console.log('A user connected');
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
