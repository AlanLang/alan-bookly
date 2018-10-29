import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'

class Books extends Component {
  constructor () {
    super()
    this.state = {
      menu : [{
        key:'book',
        icon:'book',
        text:'添加书籍'
      }]
    };
  }
  handleMenuClick(re){
    console.log(re.key);
  }
  render() {
    return (
      <div>
        <ComTitle menu={this.state.menu} onSelect={this.handleMenuClick}>达达阅读</ComTitle>
      </div>
    );
  }
}

export default Books;