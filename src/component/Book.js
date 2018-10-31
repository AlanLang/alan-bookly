import React, { Component } from 'react';
import style from './Book.css'

const Book = ({book}) => {
  return (
    <div>
      <div >
        <img src={book.img} style={{width:book.width,height:book.height}} className={style.bookImg}/>
      </div>
      {
        book.title?
        <div className={style.bookName} style={{width:book.width}}>{book.title}</div>
        :''
      }
    </div>
  );
}
export default Book;