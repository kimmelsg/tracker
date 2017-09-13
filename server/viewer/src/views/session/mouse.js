import React from 'react';
import socket from '../../socket';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    socket.on('mouse', mouse => this.setState({ mouse }));
  }
  render() {
    let mouse = this.state.mouse || this.props.mouse || {};
    return <div className="mouse" style={{ left: mouse.x, top: mouse.y }} />;
  }
}
