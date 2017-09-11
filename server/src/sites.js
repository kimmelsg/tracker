module.exports = ({ io, socket }) => {
  let sockets = io.sockets.clients().sockets;
  let sites = Object.keys(sockets)
    .filter(socket => sockets[socket].info)
    .map(socket => sockets[socket].info.origin)
    .filter((origin, pos, origins) => origins.indexOf(origin) == pos);

  io.sockets.in('viewer').emit('sites', sites);
};
