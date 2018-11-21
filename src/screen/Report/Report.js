import React, { Component } from 'react';
import ComTitle from '../../component/ComTitle'
import F2 from '@antv/f2'
import style from './Report.css'
class Report extends Component {
  constructor () {
    super()
    this.state = {
      data:[{
        day: '15',
        sales: 52
      }, {
        day: '16',
        sales: 61
      }, {
        day: '17',
        sales: 145
      }, {
        day: '18',
        sales: 48
      }, {
        day: '19',
        sales: 38
      }, {
        day: '20',
        sales: 38
      }, {
        day: '21',
        sales: 38
      }]
    }
  }
  componentDidMount(){
    const chart = new F2.Chart({
      id: 'weekNode',
      pixelRatio: window.devicePixelRatio,
      appendPadding:[12,0,0,0]
    });

    chart.source(this.state.data, {
      sales: {
        tickCount: 5
      }
    });
    chart.tooltip({
      showItemMarker: false,
      onShow: function onShow(ev) {
        let items = ev.items;
        items[0].name = null;
        items[0].name = items[0].title;
        items[0].value = items[0].value+"页";
      }
    });
    chart.interval().position('day*sales');
    chart.render();
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
        <div className={style.week}>
          一周阅读数据
          <canvas className={style.weekReport} id="weekNode"></canvas>
        </div>
      </div>
    );
  }
}

export default Report;