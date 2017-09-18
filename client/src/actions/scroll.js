import throttle from '../throttle';

export default socket => {
  window.addEventListener(
    'scroll',
    throttle(() => {
      socket.emit('scroll', {
        scrollY: window.scrollY,
      });
    }, 200)
  );
};
