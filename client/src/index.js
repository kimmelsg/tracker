import client from 'socket.io-client';

import actions from './actions';

export default host => {
  const socket = client(host);
  actions.forEach(action => action(socket));
};
