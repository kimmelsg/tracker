const Tracker = require('../server');

const server = Tracker({
  onUser: (user, site) => console.log(user, site),
  publicURL: 'localhost:8888',
});

server.listen(8888);
