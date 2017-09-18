import React from 'react';
import socket from '../../socket';

export default class Mouse extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.setMouse = this.setMouse.bind(this);
  }

  componentDidMount() {
    socket.on('mouse', this.setMouse);
  }

  setMouse({ mouse }) {
    this.setState({ mouse });
  }

  componentWillUnmount() {
    socket.removeListener('mouse', this.setMouse);
  }

  render() {
    let { scrollY = 0 } = this.state;
    let mouse = this.state.mouse || this.props.mouse || {};
    return <div className="mouse" style={{ left: mouse.x, top: mouse.y }} />;
  }
}
