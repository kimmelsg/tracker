import React from 'react';
import socket from '../../socket';
import { Link } from 'react-router-dom';

export default class Sites extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let { match } = this.props;
    let url = decodeURIComponent(match.params.site);
    socket.emit('url', url);

    socket.on('users', users => this.setState({ users }));
  }
  componentWillUnmount() {
    socket.removeListener('users');
  }
  render() {
    let { users = [] } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {users.map(user => (
            <li key={user}>
              <Link to={`/session/${user}`}>{user}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
