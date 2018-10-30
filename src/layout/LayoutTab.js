import React, { Component } from 'react';
import Books from '../screen/Books'
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
  }
  render() {
    return (
      <div>
	      <Switch>
	        <Route path="/page/books" component={Books}/>
	        
	        <Redirect path="/page" to={{pathname: '/page/books'}} />
	      </Switch>
      	<ComTabar tabar={this.state.tabar} selectedTab="book" onTabarSelect={this.handleTabarSelect.bind(this)}></ComTabar>
      </div>
    );
  }
}

export default LayoutTab;