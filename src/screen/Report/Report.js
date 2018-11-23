import React, { Component } from 'react';
import ComTitle from '../../component/ComTitle'
import F2 from '@antv/f2'
import bookModel from '../../models/BookModel'
import timeInterval from '../../utils/timeInterval'
import style from './Report.css'
class Report extends Component {
  constructor () {
    super()
    this.state = {
      "report": {
        "week": [
            {
                "name": 16,
                "value": 0
            },
            {
                "name": 17,
                "value": 0
            },
            {
                "name": 18,
                "value": 0
            },
            {
                "name": 19,
                "value": 0
            },
            {
                "name": 20,
                "value": 0
            },
            {
                "name": 21,
                "value": 0
            },
            {
                "name": 22,
                "value": 0
            }
        ],
        "days": 0,
        "all": 0
        }
    }
  }
  componentWillMount(){
    bookModel.getReadReport().then(re=>{
      this.setState({
        report:re
      })
      this.randerReport()
    })
  }
  randerReport(){
    const chart = new F2.Chart({
      id: 'weekNode',
      pixelRatio: window.devicePixelRatio,
      appendPadding:[12,12,0,0]
    });

    chart.source(this.state.report.week, {
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
        items[0].value = items[0].name+"页";
      }
    });
    chart.interval().position('name*value');
    chart.render();
  }
  render() {
    return (
      <div style={{marginTop:55}}>
        <ComTitle >阅读统计</ComTitle>
        <div className={style.continuous}>
          连续阅读<span className={style.continuousText}>{this.state.report.days}</span>天
        </div>
        <div className={style.total}>
          累计阅读 {timeInterval(this.state.report.all)}
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