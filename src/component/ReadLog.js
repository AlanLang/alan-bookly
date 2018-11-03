import React, { Component } from 'react';
import style from './ReadLog.css'
class ReadLog extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div className={style.readLogGroup}>
        <div className={style.readLogTitle}>{this.props.title}</div>
        <div className={style.readLogMsg}>
          <div>
            <div>阅读页数</div>
            <div>{this.props.readNum}</div>
          </div>
          <div>
            <div>阅读时间</div>
            <div>{this.props.readTime}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadLog;