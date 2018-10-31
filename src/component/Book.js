import React, { Component } from 'react';
import style from './Book.css'

const Book = ({book}) => {
  const width = document.documentElement.clientWidth/3 - 15;
  const height = width * 1.35
  return (
    <div>
      <div >
        <img src={book.img} style={{width:width,height:height}} className={style.bookImg}/>
      </div>
      <div className={style.bookName} style={{width:width}}>{book.title}</div>
    </div>
  );
}
export default Book;