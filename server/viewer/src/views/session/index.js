import React from 'react';
import Mouse from './mouse';
import socket from '../../socket';

export default class Session extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.setData = this.setData.bind(this);
    this.setUrl = this.setUrl.bind(this);
  }

  componentDidMount() {
    let { match } = this.props;
    socket.emit('session', match.params.id);

    socket.on('data', this.setData);
    socket.on('pagechange', this.setUrl);
  }

  componentWillUnmount() {
    socket.removeListener('data', this.setData);
    socket.removeListener('pagechange', this.setUrl);
  }

  setData(data) {
    this.setState({ data, url: data.url });
  }

  setUrl(url) {
    this.setState({ url });
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
