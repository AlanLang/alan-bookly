import React, { Component } from 'react';
import LayoutTab from './layout/LayoutTab'
import BooksAdd from './screen/BooksAdd'
import BookRead from './screen/BookRead'
import Login from './screen/Login/Login'
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import withHocPrivateRoute from './containers/withHocPrivateRoute';
import style from  './index.css';
import './style/theme.scss';
const  PrivateRoute =  withHocPrivateRoute(Route);

class App extends Component {
  constructor () {
    super()
  }
  componentWillMount(){
    document.body.removeChild(document.getElementById('app-loading'));
  }
  render() {
    return (
      <Router>
        <div>
          <Switch
            className={style.switchWrapper}
            >
            <PrivateRoute path="/tab" component={LayoutTab}/>
            <PrivateRoute path="/add" component={BooksAdd}/>
            <PrivateRoute path="/read/:id" component={BookRead}/>
            <Route path="/login" component={Login} />
            <Redirect path="" to={{pathname: '/tab'}} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;