import React, { Component } from 'react';
class WingBlank extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div style={{paddingLeft:12,paddingRight:12}}>
        {this.props.children}
      </div>
    );
  }
}

export default WingBlank;