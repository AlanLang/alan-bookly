import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import Book from '../component/Book'
import style from './index.css'
import BookModel from '../models/BookModel'
import { Toast } from 'antd-mobile';

class Books extends Component {
  constructor () {
    super()
    this.state = {
      menu : [{
        key:'book',
        icon:'#icon-plus',
        text:'添加书籍'
      }],
      books:null
    };
  }
  componentWillMount(){
    Toast.loading('正在获取')
    BookModel.getBooks().then(re=>{
      Toast.hide()
      this.setState({
        books:re.list
      })
    })
  }
  handleMenuClick(re){
    if("book" === re.key){
      this.props.history.push('/add')
    }
  }
  handelBookClick(re){
    if(re._id === "addBook"){
      this.props.history.push('/add')
    }else{
      this.props.history.push(`/read/${re._id}`)
    }
  }
  renderBook(){
    const width = document.documentElement.clientWidth/3 - 15;
    const height = width * 1.35
    let books = [];
    if(!this.state.books){
      return null
    }
    for (let book of this.state.books){
      book.width = width
      book.height = height
      books.push((
        <Book onBookClick={this.handelBookClick.bind(this)} key={book._id} book={book}></Book>
      ))
    }
    return books;
  }
  render() {
    const width = document.documentElement.clientWidth/3 - 15;
    const height = width * 1.35
    return (
      <div>
        <ComTitle type="none" menu={this.state.menu} onSelect={this.handleMenuClick.bind(this)}>达达阅读</ComTitle>
        <div className={style.bookGroup}>
          <Book onBookClick={this.handelBookClick.bind(this)} key="add" 
            book={
              {img:'http://pggtd27e8.bkt.clouddn.com/add.png',
              _id:'addBook',
              width:width,
              height:height}
            }
          ></Book>
          {this.renderBook()}
        </div>
      </div>
    );
  }
}

export default Books;