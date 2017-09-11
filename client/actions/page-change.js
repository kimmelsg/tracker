export default socket => {
  window.onpopstate = event => socket.emit('pagechange', window.location.href);

  document.addEventListener('click', () => {
    setTimeout(() => socket.emit('pagechange', window.location.href), 300);
  });
};
