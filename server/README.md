## Tracker server

## Install

```js
npm install @kimmel/tracker-server

```

## Setup

Import via npm:

```js
const Tracker = require('@kimmel/tracker-server');

const server = Tracker({
  onUser: (user, site) => console.log(user, site),
  publicURL: 'localhost:8888',
});

server.listen(8888);

```

## Access

There is no user auth currently. Block access to `/view/**` using nginx or whatever webserver you use to the public.


## Next Steps

Now, send all connections to the public url you have setup, using [the client](../client)
