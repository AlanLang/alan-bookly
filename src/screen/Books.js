import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import Book from '../component/Book'
import style from './index.css'
import BookModel from '../models/BookModel'
import storage from '../utils/StorageUtil'
import {FabButton,Icon} from 'alanui-mobile';

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
    let books = storage.get('books')
    if(books){
      this.setState({
        books:JSON.parse(books)
      })
    }
    BookModel.getBooks().then(re=>{
      this.setState({
        books:re.list
      })
      storage.set("books",JSON.stringify(re.list))
    })
  }
  handleMenuClick(re){
    if("book" === re.key){
      this.props.history.push('/add')
    }
  }
  handelBookClick(re){
    this.props.history.push(`/read/${re._id}`)
  }

  handleAddBook=()=>{
    this.props.history.push('/add')
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
        <ComTitle type="none" menu={this.state.menu} onSelect={this.handleMenuClick.bind(this)}>所有书籍</ComTitle>
        <div className={style.bookGroup}>
          {this.renderBook()}
        </div>
        <FabButton reverse={true} style={{bottom:70}} icon={(<Icon icon="add"/>)}>
            <Icon icon="add" onClick={this.handleAddBook}/>
            <Icon icon="face"/>
        </FabButton>
      </div>
    );
  }
}

export default Books;