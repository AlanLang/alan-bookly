import React, { Component } from 'react';
import style from './Book.css'


class Book extends Component {
  renderTitle(){
    if(this.props.book.title){
      return(<div className={style.bookName} style={{width:this.props.book.width}}>{this.props.book.title}</div>)
    }
  }
  render(){
    const book = this.props.book
    return (
      <div>
        <div onClick={this.props.onBookClick.bind(this,this.props.book)} >
          <img src={book.img} style={{width:book.width,height:book.height}} className={style.bookImg}/>
        </div>
        {
          this.renderTitle()
        }
      </div>
    );
  }
}
export default Book;