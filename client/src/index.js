import actions from './actions';
import client from 'socket.io-client';
import messages from './receive-message';

export default host => {
  messages(host);
  const socket = client(host);
  actions.forEach(action => action(socket));
};
