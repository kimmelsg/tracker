import client from 'socket.io-client';

export default client('http://localhost:8888' || window.location.host);
