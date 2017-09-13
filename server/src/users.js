module.exports = ({ io, socket, url }) => {
  let sockets = io.sockets.clients().sockets;
  let users = Object.keys(sockets)
    .filter(socket => sockets[socket].info)
    .filter(socket => sockets[socket].info.origin === url);

  io.sockets.in(url).emit('users', users);
};
