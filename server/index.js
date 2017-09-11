const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('loaded', data => {
    socket.info = data;

    console.log(data);
  });

  socket.on('mousemove', data => {
    console.log(data);
  });

  socket.on('pagechange', data => {
    console.log(data);
  });
});

module.exports = ({ onUser }) => {
  return server;
};
