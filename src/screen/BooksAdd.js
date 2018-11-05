import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import ImgUpload from '../component/ImgUpload'
import style from './index.css'
import ami from  "./Container.css";
import TweenOne from 'rc-tween-one';

class BooksAdd extends Component {
  constructor () {
    super()
  }
  onLeftClick(){
    this.props.history.goBack()
  }
  componentWillMount() {
  }
  render() {
    const width = document.documentElement.clientWidth/3 - 15;
    const height = width * 1.35 + "px"

    return (
      <div>
      	<ComTitle type="left" onLeftClick={this.onLeftClick.bind(this)}>书籍添加</ComTitle>
        <div className={style.bookAddGroup}>
          <ImgUpload width={width} height={height}></ImgUpload>
          <div className={style.bookContent}>
              <input class="login-input" type="text" placeholder="书籍名称" name=""/>
              <input class="login-input" type="text" placeholder="出版社" name=""/>
              <input class="login-input" type="text" placeholder="作者" name=""/>
              <input class="login-input" type="text" placeholder="页码数" name=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksAdd;