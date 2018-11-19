import React, { Component } from 'react';
import ComTitle from '../../component/ComTitle'
import style from './Report.css'
class Report extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div>
        <ComTitle >阅读统计</ComTitle>
        <div className={style.continuous}>
          连续阅读<span className={style.continuousText}>1</span>天
        </div>
        <div className={style.total}>
          累计阅读 2天13小时45秒
        </div>
      </div>
    );
  }
}

export default Report;