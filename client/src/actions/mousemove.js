import throttle from '../throttle';

export default socket => {
  document.addEventListener(
    'mousemove',
    throttle(e => {
      socket.emit('mousemove', { x: e.pageX, y: e.pageY - window.scrollY });
    }, 200)
  );
};
