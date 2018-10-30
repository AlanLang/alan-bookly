import React, { Component } from 'react';
import Books from '../screen/Books'
import Report from '../screen/Report'
import ComTabar from '../component/ComTabar'
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

class LayoutTab extends Component {
  constructor () {
    super()
    this.state = {
      tabar : [{
        key:'book',
        icon:'#icon-books',
        selectedIcon:'#icon-books-select',
        text:'书籍',
        badge:0
      },{
        key:'pie',
        icon:'#icon-piechart',
        selectedIcon:'#icon-piechart-select',
        text:'统计',
        badge:3
      }]
    };
  }
  handleTabarSelect(item){
    console.log(item)
    if(item.key === 'book'){
      this.props.history.push('/tab/book')
    }
    if('pie' === item.key){
      this.props.history.push('/tab/report')
    }
  }
  render() {
    return (
      <div>
	      <Switch>
          <Route path="/tab/book" component={Books}/>
	        <Route path="/tab/report" component={Report}/>
	        <Redirect path="" to={{pathname: '/tab/book'}} />
	      </Switch>
      	<ComTabar tabar={this.state.tabar} selectedTab="book" onTabarSelect={this.handleTabarSelect.bind(this)}></ComTabar>
      </div>
    );
  }
}

export default LayoutTab;