import React, { Component } from 'react';
import Books from '../screen/Books'
import Report from '../screen/Report'
import UserSet from '../screen/UserSet/UserSet'
import ComTabar from '../component/ComTabar'
import {Route,Redirect,Switch} from 'react-router-dom';

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
        badge:0
      },{
        key:'me',
        icon:'#icon-user',
        selectedIcon:'#icon-user-select',
        text:'我的',
        badge:0
      }]
    };
  }
  handleTabarSelect(item){
    switch(item.key){
      case 'book':
        this.props.history.push('/tab/book')
        break
      case 'pie':
        this.props.history.push('/tab/report')
        break
      case 'me':
        this.props.history.push('/tab/me')
        break
      default :
        this.props.history.push('/tab/book')
    }

  }
  render() {
    return (
      <div>
	      <Switch>
          <Route path="/tab/book" component={Books}/>
          <Route path="/tab/report" component={Report}/>
	        <Route path="/tab/me" component={UserSet}/>
	        <Redirect path="" to={{pathname: '/tab/book'}} />
	      </Switch>
      	<ComTabar tabar={this.state.tabar} selectedTab="book" onTabarSelect={this.handleTabarSelect.bind(this)}></ComTabar>
      </div>
    );
  }
}

export default LayoutTab;