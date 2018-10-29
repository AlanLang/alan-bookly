import React, { Component } from 'react';
import Books from '../screen/Books'
import BooksAdd from '../screen/BooksAdd'
import ComTabar from '../component/ComTabar'
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

class LayoutTab extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div>
	      <Switch>
	        <Route path="/page/books" component={Books}/>
	        <Route path="/page/add" component={BooksAdd}/>
	        <Redirect path="/page" to={{pathname: '/page/books'}} />
	      </Switch>
      	<ComTabar></ComTabar>
      </div>
    );
  }
}

export default LayoutTab;