import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import Book from '../component/Book'
import style from './index.css'
class Books extends Component {
  constructor () {
    super()
    this.state = {
      menu : [{
        key:'book',
        icon:'#icon-plus',
        text:'添加书籍'
      }],
      books:[{
        title:'软技能',
        img:'http://oqdzx28cd.bkt.clouddn.com/18-10-30/93168232.jpg'
      },{
        title:'怪诞行为学',
        img:'http://oqdzx28cd.bkt.clouddn.com/18-10-30/7339718.jpg'
      },{
        title:'穷爸爸富爸爸',
        img:'http://oqdzx28cd.bkt.clouddn.com/18-10-30/91733172.jpg'
      }]
    };
  }
  handleMenuClick(re){
    if("book" === re.key){
      this.props.history.push('/add')
    }
  }
  renderBook(){
    let books = [];
    for (let book of this.state.books){
      books.push((
        <Book key={book.title} book={book}></Book>
      ))
    }
    return books;
  }
  render() {
    return (
      <div>
        <ComTitle type="none" menu={this.state.menu} onSelect={this.handleMenuClick.bind(this)}>达达阅读</ComTitle>
        <div className={style.bookGroup}>
          {this.renderBook()}
        </div>
      </div>
    );
  }
}

export default Books;