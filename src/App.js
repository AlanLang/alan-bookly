import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import styles from './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faPlus } from '@fortawesome/free-solid-svg-icons'
import LayoutTab from './layout/LayoutTab'
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

library.add(faBook,faPlus)

class App extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Switch>
            <Route path="/page" component={LayoutTab}/>
            <Redirect path="/" to={{pathname: '/page'}} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
