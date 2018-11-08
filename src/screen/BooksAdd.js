import React, { Component } from 'react';
import { Button, WhiteSpace,WingBlank,Modal,Toast} from 'antd-mobile';

import ComTitle from '../component/ComTitle'
import ImgUpload from '../component/ImgUpload'
import style from './index.css'
import TweenOne from 'rc-tween-one';
import BookModel from '../models/BookModel'

class BooksAdd extends Component {
  constructor () {
    super()
    this.state = {
      img:''
    }
  }
  onLeftClick(){
    this.props.history.goBack()
  }
  componentWillMount() {
  }
  handleAddBook(){
    let book = {
      img:this.state.img,
      title:this.state.title,
      press:this.state.press,
      author:this.state.author,
      pageNumber:parseInt(this.state.pageNumber)
    }
    BookModel.addBook(book).then(re=>{
      Toast.success('书籍添加成功',2,re=>{
        this.props.history.goBack()
      })
    })
  }
  handleChange(event){
    if(event.target.files[0]){
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      BookModel.uploadBookImg(formData).then(re=>{
        this.setState({
          img:`http://langwenda.com:7001/image/${re._id}`
        })
      })
    }
  }
  render() {
    const width = document.documentElement.clientWidth/3 - 15;
    const height = width * 1.35 + "px"

    return (
      <div>
      	<ComTitle type="left" onLeftClick={this.onLeftClick.bind(this)}>书籍添加</ComTitle>
        <div className={style.bookAddGroup}>
          <ImgUpload src={this.state.img} width={width} height={height} onChange={this.handleChange.bind(this)}></ImgUpload>
          <div className={style.bookContent}>
            <input className="login-input" onChange={e=>this.setState({title:e.target.value})} type="text" placeholder="书籍名称" name=""/>
            <input className="login-input" onChange={e=>this.setState({press:e.target.value})} type="text" placeholder="出版社" name=""/>
            <input className="login-input" onChange={e=>this.setState({author:e.target.value})} type="text" placeholder="作者" name=""/>
            <input className="login-input" onChange={e=>this.setState({pageNumber:e.target.value})} type="text" placeholder="页码数" name=""/>
          </div>
        </div>
        <WingBlank>
          <WhiteSpace />
          <Button onClick={this.handleAddBook.bind(this)} type="primary">添加</Button>
        </WingBlank>
      </div>
    );
  }
}

export default BooksAdd;