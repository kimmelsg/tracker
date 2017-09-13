import React from 'react';
import Mouse from './mouse';
import socket from '../../socket';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let { match } = this.props;
    socket.emit('session', match.params.id);

    socket.on('data', data => this.setState({ data, url: data.url }));
    socket.on('pagechange', url => this.setState({ url }));
  }

  componentWillUnmount() {
    socket.removeListener('data');
    socket.removeListener('pagechange');
  }
  render() {
    let { url, data = {} } = this.state;
    return (
      <div>
        {url ? (
          <iframe
            src={url}
            className="viewer"
            title="View"
            style={{ width: data.width, height: data.height }}
          />
        ) : null}
        <Mouse mouse={data.mouse} />
      </div>
    );
  }
}
