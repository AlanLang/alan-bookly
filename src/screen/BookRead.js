import React, { Component } from 'react';
import BookModel from '../models/BookModel'
import Book from '../component/Book'
import style from './index.css'
import ComTitle from '../component/ComTitle'
import { Button, WhiteSpace,WingBlank,Modal,Toast} from 'antd-mobile';
import ReadLog from '../component/ReadLog'
import timeInterval from '../utils/timeInterval'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

const {alert,prompt} = Modal;

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
  stopRead(value,cb){
    BookModel.stopRead(this.state.readLog.log._id,value).then(re=>{
      this.loadBookReadLogStatus()
      this.loadReadLog()
      clearInterval(this.timerID);
      cb()
    })
  }
  handleStopButtonClick(){
    prompt('提醒', '是否完成本次阅读？',[{text: '算了'},
      {
        text: '提交',
        onPress: value => new Promise((resolve, reject)=>{
          if(this.state.readLog.num >= value){
            Toast.info(`页码数必须大于${this.state.readLog.num}`, 1);
            setTimeout(() => {
              reject();
            }, 1000);
          }else{
            this.stopRead(value - this.state.readLog.num,()=>resolve())
          }
        })
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
      logs.push(<div key={log._id}><ReadLog  title="2018年11月3日" readNum={log.readNumber} readTime={timeInterval(log.timeArea)}></ReadLog><WhiteSpace /></div>)
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
            <Button onClick={this.handleBeginButtonClick.bind(this)} size="small" type="primary">开始阅读</Button>
            :
            <Button onClick={this.handleStopButtonClick.bind(this)} size="small" type="warning">停止阅读{this.state.readTime}</Button>
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