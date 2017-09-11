const path = require('path');
const app = require('express')();
const express = require('express');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const sites = require('./src/sites');

io.on('connection', socket => {
  //check if this is the server itself later
  if (socket.handshake.headers.referer === 'http://localhost:3001/') {
    socket.join('viewer');
    sites({ io, socket });
  }

  socket.on('loaded', data => {
    socket.info = data;
    sites({ io, socket });
    console.log(data);
  });

  socket.on('mousemove', data => {
    console.log(data);
  });

  socket.on('pagechange', data => {
    console.log(data);
  });
});

app.use(express.static(path.join(__dirname, 'viewer/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/viewer/build/index.html'));
});

module.exports = ({ onUser }) => {
  return server;
};
