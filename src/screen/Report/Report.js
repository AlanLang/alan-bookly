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
                "name": "16天",
                "value": 4
            },
            {
                "name": "17天",
                "value": 0
            },
            {
                "name": "18天",
                "value": 0
            },
            {
                "name": "19天",
                "value": 0
            },
            {
                "name": "20天",
                "value": 0
            },
            {
                "name": "21天",
                "value": 8
            },
            {
                "name": "22天",
                "value": 0
            }
        ],
        "days": 0,
        "all": 0
        },
        month:[
        {
          date: "2018-06-05",
          value: 116
        }, {
          date: "2018-06-06",
          value: 129
        }, {
          date: "2018-06-07",
          value: 135
        }, {
          date: "2018-06-08",
          value: 86
        }, {
          date: "2018-06-09",
          value: 73
        }, {
          date: "2018-06-10",
          value: 85
        }, {
          date: "2018-06-11",
          value: 73
        }, {
          date: "2018-06-12",
          value: 68
        }, {
          date: "2018-06-13",
          value: 92
        }, {
          date: "2018-06-14",
          value: 130
        }, {
          date: "2018-06-15",
          value: 245
        }, {
          date: "2018-06-16",
          value: 139
        }, {
          date: "2018-06-17",
          value: 115
        }, {
          date: "2018-06-18",
          value: 111
        }, {
          date: "2018-06-19",
          value: 309
        }, {
          date: "2018-06-20",
          value: 206
        }, {
          date: "2018-06-21",
          value: 137
        }, {
          date: "2018-06-22",
          value: 128
        }, {
          date: "2018-06-23",
          value: 85
        }, {
          date: "2018-06-24",
          value: 94
        }, {
          date: "2018-06-25",
          value: 71
        }, {
          date: "2018-06-26",
          value: 106
        }, {
          date: "2018-06-27",
          value: 84
        }, {
          date: "2018-06-28",
          value: 93
        }, {
          date: "2018-06-29",
          value: 85
        }, {
          date: "2018-06-30",
          value: 73
        }, {
          date: "2018-07-01",
          value: 83
        }, {
          date: "2018-07-02",
          value: 125
        }, {
          date: "2018-07-03",
          value: 107
        }, {
          date: "2018-07-04",
          value: 82
        }, {
          date: "2018-07-05",
          value: 44
        }, {
          date: "2018-07-06",
          value: 72
        }, {
          date: "2018-07-07",
          value: 106
        }, {
          date: "2018-07-08",
          value: 107
        }, {
          date: "2018-07-09",
          value: 66
        }, {
          date: "2018-07-10",
          value: 91
        }, {
          date: "2018-07-11",
          value: 92
        }, {
          date: "2018-07-12",
          value: 113
        }, {
          date: "2018-07-13",
          value: 107
        }, {
          date: "2018-07-14",
          value: 131
        }, {
          date: "2018-07-15",
          value: 111
        }, {
          date: "2018-07-16",
          value: 64
        }, {
          date: "2018-07-17",
          value: 69
        }, {
          date: "2018-07-18",
          value: 88
        }, {
          date: "2018-07-19",
          value: 77
        }, {
          date: "2018-07-20",
          value: 83
        }, {
          date: "2018-07-21",
          value: 111
        }, {
          date: "2018-07-22",
          value: 57
        }, {
          date: "2018-07-23",
          value: 55
        }, {
          date: "2018-07-24",
          value: 60
        }
        ]
    }
  }
  componentWillMount(){
    bookModel.getReadReport().then(re=>{
      this.setState({
        report:re,
        week:re.week.map(data=>{
          return {
            name:data.name+"日",
            value:data.value
          }
        })
      })
      console.log(this.state)
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
    chart.source(this.state.month, {
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

    chart.source(this.state.week, {
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
        <div className={style.week}>
          月阅读统计
          <canvas className={style.weekReport} id="monthNode"></canvas>
        </div>
      </div>
    );
  }
}

export default Report;