import throttle from '../throttle';

export default socket => {
  window.addEventListener(
    'resize',
    throttle(e => {
      socket.emit('resize', {
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 200)
  );
};
