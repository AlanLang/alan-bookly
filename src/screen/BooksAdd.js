import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'


class BooksAdd extends Component {
  constructor () {
    super()
  }
  onLeftClick(){
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
      	<ComTitle type="left" onLeftClick={this.onLeftClick.bind(this)}>书籍添加</ComTitle>
      </div>
    );
  }
}

export default BooksAdd;