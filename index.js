var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("New connection from " + socket.request.connection.remoteAddress);
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(666, function(){
  console.log('listening on *:666');
});
