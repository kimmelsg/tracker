import React from 'react';
import Mouse from './mouse';
import socket from '../../socket';

export default class Session extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.scroll = this.scroll.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    let { match } = this.props;
    socket.emit('session', match.params.id);

    socket.on('data', this.setData);
    socket.on('scroll', this.scroll);
    socket.on('pagechange', this.setUrl);
  }

  componentWillUnmount() {
    socket.removeListener('data', this.setData);
    socket.removeListener('scroll', this.scroll);
    socket.removeListener('pagechange', this.setUrl);
  }

  scroll({ scrollY }) {
    this.iframe.contentWindow.postMessage({ scrollY: scrollY }, '*');
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
            ref={ref => (this.iframe = ref)}
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
