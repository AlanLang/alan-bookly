import React, { Component } from 'react';
import BookModel from '../models/BookModel'
import Book from '../component/Book'
import style from './index.css'
import ComTitle from '../component/ComTitle'
import WhiteSpace from '../component/WhiteSpace'
import WingBlank from '../component/WingBlank'
import {Button,Toast,MessageBox} from 'alanui-mobile';
import ReadLog from '../component/ReadLog'
import timeInterval from '../utils/timeInterval'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import moment from 'moment';

class BookRead extends Component {
  constructor () {
    super()
    this.state = {
      book:{},// 书籍信息
      readTime:'...',//已阅读时间
      readLog:{
        coutn:0,
        type:0,// 0 未阅读中，1已阅读中
        log:{}// 最后一条阅读信息
      },
      log:[]// 所有阅读记录
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
      this.getReadTime();
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
  getReadTime(){
    this.timerID = setInterval(
    () => {
      let tiemArea = "";
      if(!this.state.readLog.log || !this.state.readLog.log.startTime){
        tiemArea = "未阅读"
      }else{
        let start = Date.parse(this.state.readLog.log.startTime);
        let now = new Date()
        tiemArea = timeInterval((now.getTime() - start)/1000)
      }
      this.setState({
        readTime:`(${tiemArea})`
      })
    },1000);
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
      this.loadBookReadLogStatus()
      this.loadReadLog()
      clearInterval(this.timerID);
    })
  }
  handleStopButtonClick(){
    MessageBox.prompt({
      title: '提示',
      message: '请输入本次阅读的页码',
      cancelButtonText:'算了',
      onConfirm:(value)=>{
        if(this.state.readLog.num >= value){
          Toast.show({
              message:`页码数必须大于${this.state.readLog.num}`,
              position:'bottom'
          })
          return false;
        }else{
          this.stopRead(value - this.state.readLog.num)
          return true;
        }
      }
    });
  }
  handleBeginButtonClick(){
    MessageBox.confirm({
      title:'提示',
      message:'是否开始本次阅读?',
      cancelButtonText:'算了',
      onConfirm:()=>{
        this.beginRead()//开始阅读
      }
    })
  }
  renderLog(){
    let logs = [];
    for(let log of this.state.log){
      let day = moment(log.stopTime).format("YYYY年MM月DD日 HH:mm");
      logs.push(<div key={log._id}><ReadLog  title={day} readNum={log.readNumber} readTime={timeInterval(log.timeArea)}></ReadLog><WhiteSpace /></div>)
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
      <div style={{marginTop:50}}>
        <ComTitle hasLeft={true} onLeftClick={this.handleLeftClick.bind(this)}>读书记录</ComTitle>
        <TweenOne
          animation={[
          { scale: 0.9 },
          { scale: 1 },
          ]}
        >
          <div className={style.bookAddGroup}>
             <Book key={this.state.book.title} book={book}></Book>
             <div className={style.bookContent}>
               <div className={style.bookTitle}>{this.state.book.title}</div>
               <div className={style.bookMessage}>
                 <div>出版社：{this.state.book.press}</div>
                 <div>作者：{this.state.book.author}</div>
                 <div>阅读进度：{this.state.readLog.num}/{this.state.book.pageNumber}</div>
                 <div>阅读时长：{timeInterval(this.state.readLog.count)}</div>
               </div>
             </div>
          </div>
        </TweenOne>
        <WingBlank>
          <WhiteSpace />
          {
            this.state.readLog.type == 0?
            <Button className={style.blockbutton} onClick={this.handleBeginButtonClick.bind(this)} block={true} theme="primary">开始阅读</Button>
            :
            <Button className={style.blockbutton} onClick={this.handleStopButtonClick.bind(this)} block={true} theme="danger">停止阅读{this.state.readTime}</Button>
          }
        </WingBlank>
        <WhiteSpace />

        <WingBlank size="md">
          <WhiteSpace />
          <QueueAnim>
            {this.renderLog()}
          </QueueAnim>
        </WingBlank>
      </div>
    );
  }
  // 组件销毁之前关闭定时器
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
}

export default BookRead;