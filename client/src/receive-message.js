// When the page is loaded as an iframe, this is the only way to set the scroll position on the backend

export default host => {
  window.addEventListener('message', ({ data, origin }) => {
    //if (!origin.indexOf(host)) return;
    if (data.scrollY) window.scrollTo(0, data.scrollY);
  });
};
