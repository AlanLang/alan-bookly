import React, { Component } from 'react';
import BookModel from '../models/BookModel'
import Book from '../component/Book'
import style from './index.css'
import ComTitle from '../component/ComTitle'
import { Button, WhiteSpace,WingBlank,Modal } from 'antd-mobile';
import ReadLog from '../component/ReadLog'
const {alert,prompt} = Modal;

class BookRead extends Component {
  constructor () {
    super()
    this.state = {
      book:{},
      readLog:{
        coutn:0,
        type:0,
        log:{}
      },
      log:[]
    }
  }
  componentWillMount(){
    const bookId = this.props.match.params.id
    BookModel.getBook(bookId).then(re=>{
      this.setState({
        book:re
      })
      this.loadBookReadLogStatus()
      this.loadReadLog()
    })
  }
  loadBookReadLogStatus(){
    BookModel.getReadStatus(this.props.match.params.id).then(re=>{
      this.setState({
        readLog:re
      })
    })
  }
  loadReadLog(){
    BookModel.getReadLog(this.props.match.params.id).then(re=>{
      this.setState({
        log:re
      })
    })
  }
  handleLeftClick(){
    this.props.history.goBack()
  }
  beginRead(){
    BookModel.beginRead(this.props.match.params.id).then(re=>{
      this.setState({
        readLog:{
          type:1
        }
      })
      this.loadBookReadLogStatus()
    })
  }
  stopRead(value){
    BookModel.stopRead(this.state.readLog.log._id,value).then(re=>{
      this.setState({
        readLog:{
          type:0
        }
      })
      this.loadBookReadLogStatus()
      this.loadReadLog()
    })
  }
  handleStopButtonClick(){
    prompt('提醒', '是否完成本次阅读？',[{text: '算了'},
      {
        text: '提交',
        onPress: value => {
          this.stopRead(value)
        }
      },
    ], 'default', null, ['请输入页码数'])
  }
  handleBeginButtonClick(){
    alert('提醒', '开始本次阅读吗?', [{ text: '算了'},
      {
        text: '阅读',
        onPress:()=>{
          this.beginRead()//开始阅读
        }
      },
    ])
  }
  renderLog(){
    let logs = [];
    for(let log of this.state.log){
      logs.push(<div><ReadLog title="2018年11月3日" readNum={log.readNumber} readTime={log.timeArea}></ReadLog><WhiteSpace /></div>)
    }
    return logs
  }
  render() {
    const width = document.documentElement.clientWidth/3 - 15;
    const height = width * 1.35
    const book = {
      width:width,
      height:height,
      img:this.state.book.img
    }
    return (
      <div>
        <ComTitle type="left" onLeftClick={this.handleLeftClick.bind(this)}>读书记录</ComTitle>
        <div className={style.bookAddGroup}>
           <Book key={this.state.book.title} book={book}></Book>
           <div className={style.bookContent}>
             <div className={style.bookTitle}>{this.state.book.title}</div>
             <div className={style.bookMessage}>
               <div>出版社：{this.state.book.press}</div>
               <div>作者：{this.state.book.author}</div>
               <div>阅读进度：{this.state.readLog.num}/{this.state.book.pageNumber}</div>
               <div>阅读时长：{this.state.readLog.count}</div>
             </div>
           </div>
        </div>
        <WingBlank>
          <WhiteSpace />
          {
            this.state.readLog.type == 0?
            <Button onClick={this.handleBeginButtonClick.bind(this)} size="small" type="primary">开始阅读</Button>
            :
            <Button onClick={this.handleStopButtonClick.bind(this)} size="small" type="warning">停止阅读</Button>
          }
        </WingBlank>
        <WhiteSpace />

        <WingBlank size="md">
          {this.renderLog()}
        </WingBlank>
      </div>
    );
  }
}

export default BookRead;