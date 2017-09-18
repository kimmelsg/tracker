import throttle from '../throttle';

export default socket => {
  document.addEventListener(
    'mousemove',
    throttle(e => {
      socket.emit('mousemove', { x: e.clientX, y: e.clientY });
    }, 200)
  );
};
