export default socket => {
  socket.on('connect', () => {
    socket.emit('loaded', {
      origin: window.location.origin,
      url: window.location.href,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });
};
