import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import ImgUpload from '../component/ImgUpload'
import style from './index.css'

class BooksAdd extends Component {
  constructor () {
    super()
  }
  onLeftClick(){
    this.props.history.goBack()
  }
  render() {
    const width = document.documentElement.clientWidth/3 - 15;
    const height = width * 1.35 + "px"

    return (
      <div>
      	<ComTitle type="left" onLeftClick={this.onLeftClick.bind(this)}>书籍添加</ComTitle>
        <div className={style.bookAddGroup}>
          <ImgUpload></ImgUpload>
          <div className={style.bookContent}>

          </div>
        </div>
      </div>
    );
  }
}

export default BooksAdd;