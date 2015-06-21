var express = require('express');
var app = express();
var server = require('http').createServer(app);
var fs = require("fs");

//Chargement des fichiers
app.use(express.static(__dirname + '/public'));

//Chargement de Socket.io
var io = require('socket.io').listen(server); 

// localhost
// server.listen(8888); 

// online
server.listen(8000, '167.114.246.215'); 

//Quand un client se connect au server
io.sockets.on('connection', function(socket){

	socket.on('btnClick1', function(message){
		socket.broadcast.emit('btnClick1', message);
	});

	socket.on('btnClick2', function(message){
		socket.broadcast.emit('btnClick2', message);
	});

	socket.on('btnClick3', function(message){
		socket.broadcast.emit('btnClick3', message);
	});

	socket.on('btnClick4', function(message){
		socket.broadcast.emit('btnClick4', message);
	});

	socket.on('btnClick5', function(message){
		socket.broadcast.emit('btnClick5', message);
	});

	socket.on('btnClick6', function(message){
		socket.broadcast.emit('btnClick6', message);
	});

	socket.on('checkbox1checked', function(message){
		socket.broadcast.emit('checkbox1checked', message);
	});

	socket.on('checkbox1unchecked', function(message){
		socket.broadcast.emit('checkbox1unchecked', message);
	});

	socket.on('checkbox2checked', function(message){
		socket.broadcast.emit('checkbox2checked', message);
	});

	socket.on('checkbox2unchecked', function(message){
		socket.broadcast.emit('checkbox2unchecked', message);
	});

	socket.on('checkbox3checked', function(message){
		socket.broadcast.emit('checkbox3checked', message);
	});

	socket.on('checkbox3unchecked', function(message){
		socket.broadcast.emit('checkbox3unchecked', message);
	});

	socket.on('checkbox4checked', function(message){
		socket.broadcast.emit('checkbox4checked', message);
	});

	socket.on('checkbox4unchecked', function(message){
		socket.broadcast.emit('checkbox4unchecked', message);
	});

	socket.on('checkbox5checked', function(message){
		socket.broadcast.emit('checkbox5checked', message);
	});

	socket.on('checkbox5unchecked', function(message){
		socket.broadcast.emit('checkbox5unchecked', message);
	});

	socket.on('checkbox6checked', function(message){
		socket.broadcast.emit('checkbox6checked', message);
	});

	socket.on('checkbox6unchecked', function(message){
		socket.broadcast.emit('checkbox6unchecked', message);
	});

	socket.on('slider1changed', function(val){
		socket.broadcast.emit('slider1changed', val);
	});

	socket.on('slider2changed', function(val){
		socket.broadcast.emit('slider2changed', val);
	});

	socket.on('slider3changed', function(val){
		socket.broadcast.emit('slider3changed', val);
	});

	socket.on('slider4changed', function(val){
		socket.broadcast.emit('slider4changed', val);
	});

	socket.on('slider5changed', function(val){
		socket.broadcast.emit('slider5changed', val);
	});

	socket.on('slider6changed', function(val){
		socket.broadcast.emit('slider6changed', val);
	});

	socket.on('slider7changed', function(val){
		socket.broadcast.emit('slider7changed', val);
	});

	socket.on('player-play-click', function(message){
		socket.broadcast.emit('player-play-click', message);
	});

	socket.on('player-pause-click', function(message){
		socket.broadcast.emit('player-pause-click', message);
	});

	socket.on('player-stop-click', function(message){
		socket.broadcast.emit('player-stop-click', message);
	});

	socket.on('player-previous-click', function(message){
		socket.broadcast.emit('player-previous-click', message);
	});

	socket.on('player-next-click', function(message){
		socket.broadcast.emit('player-next-click', message);
	});
});