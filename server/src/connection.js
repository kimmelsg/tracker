const sites = require('./sites');
const users = require('./users');

module.exports = ({ publicURL, io }) => {
  io.on('connection', socket => {
    //check if this is the server itself later
    if (socket.handshake.headers.host === publicURL) {
      socket.join('viewer');
      sites({ io, socket });
    }

    socket.on('url', url => {
      if (!socket.rooms['viewer']) return;

      socket.join(url);
      users({ io, socket, url });
    });

    socket.on('session', session => {
      if (!socket.rooms['viewer']) return;

      socket.join(`session-${session}`);
      let viewee = io.sockets.clients().sockets[session];
      if (!viewee) return;
      io.sockets.in(`session-${session}`).emit('data', viewee.info);
    });

    socket.on('loaded', data => {
      socket.info = data;
      sites({ io, socket });
      users({ io, socket, url: data.origin });
      io.sockets.in(`session-${socket.id}`).emit('data', socket.info);
    });

    socket.on('mousemove', mouse => {
      socket.info = { ...socket.info, mouse };
      io.sockets.in(`session-${socket.id}`).emit('mouse', mouse);
    });

    socket.on('pagechange', url => {
      socket.info = { ...socket.info, url };
      io.sockets.in(`session-${socket.id}`).emit('pagechange', url);
    });

    socket.on('resize', ({ height, width }) => {
      socket.info = { ...socket.info, width, height };
      io.sockets.in(`session-${socket.id}`).emit('data', socket.info);
    });
  });
};
