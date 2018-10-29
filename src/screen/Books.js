import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import { Button } from 'antd-mobile'

import {withRouter} from "react-router-dom";

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
    if("book" === re.key){
      this.props.history.push('/page/add')
    }
  }
  render() {
    return (
      <div>
        <ComTitle menu={this.state.menu} onSelect={this.handleMenuClick.bind(this)}>达达阅读</ComTitle>
      </div>
    );
  }
}

export default Books;