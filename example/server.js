const Tracker = require('../server');

const server = Tracker({
  onUser: (user, site) => console.log(user, site),
});

server.listen(8888);
