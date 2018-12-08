import React, { Component } from 'react';
import ComTitle from '../../component/ComTitle'
import F2 from '@antv/f2'
import bookModel from '../../models/BookModel'
import timeInterval from '../../utils/timeInterval'
import style from './Report.css'
const moment = require('moment');


class Report extends Component {
  constructor () {
    super()
    this.state = {
      "continueDays":0,
      "totalRead":0,
      "weekRead":[]
    }
  }
  componentWillMount(){
    bookModel.getReadReport().then(re=>{
      if(re.count > 0){
        const today = moment().format("YYYYMMDD")
        const todayRead = re.list.find(data=>data.moment == today);
        let weekRead = [];
        for(let i = 0; i <7; i++){
          const thisDay = moment().subtract(i,"d").format("YYYYMMDD")
          const thisRead = re.list.find(data=>data.moment == thisDay)
          weekRead.push({
            name:moment().subtract(i,"d").format("DD")+"日",
            value:thisRead?thisRead.readNumber:0
          })
        }
        let monthRead = [];
        for(let i = 0; i <30; i++){
          const thisDay = moment().subtract(i,"d").format("YYYYMMDD")
          const thisRead = re.list.find(data=>data.moment == thisDay)
          monthRead.push({
            date:moment().subtract(i,"d").format("YYYY-MM-DD"),
            value:thisRead?thisRead.readNumber:0
          })
        }
        this.setState({
          "continueDays":todayRead?todayRead.continueDay:0,
          "totalRead":re.list[0].timeCount,
          "weekRead":weekRead.reverse(),
          "monthRead":monthRead.reverse()
        })
      }
      this.randerReport()
      this.randerMonth()
    })
  }
  randerMonth(){
    var chart = new F2.Chart({
      id: 'monthNode',
      pixelRatio: window.devicePixelRatio,
      appendPadding:[12,5,40,0]
    });
    chart.source(this.state.monthRead, {
      value: {
        tickCount: 5,
        min: 0
      },
      date: {
        type: 'timeCat',
        range: [0, 1],
        tickCount: 3
      }
    });
    chart.tooltip({
      custom: true,
      showXTip: true,
      showYTip: true,
      snap: true,
      crosshairsType: 'xy',
      crosshairsStyle: {
        lineDash: [2]
      }
    });
    chart.axis('date', {
      label: function label(text, index, total) {
        var textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    chart.line().position('date*value');
    chart.render();
  }
  randerReport(){
    const chart = new F2.Chart({
      id: 'weekNode',
      pixelRatio: window.devicePixelRatio,
      appendPadding:[12,5,5,0]
    });

    chart.source(this.state.weekRead, {
      sales: {
        tickCount: 5
      }
    });
    chart.tooltip({
      showItemMarker: false,
      onShow: function onShow(ev) {
        let items = ev.items;
        items[0].name = null;
        items[0].name = items[0].name;
        items[0].value = items[0].value+"页";
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
          连续阅读<span className={style.continuousText}>{this.state.continueDays}</span>天
        </div>
        <div className={style.total}>
          累计阅读 {timeInterval(this.state.totalRead)}
        </div>
        <div className={style.week}>
          一周阅读数据
          <canvas className={style.weekReport} id="weekNode"></canvas>
        </div>
        <div className={style.week}>
          阅读趋势
          <canvas className={style.weekReport} id="monthNode"></canvas>
        </div>
      </div>
    );
  }
}

export default Report;