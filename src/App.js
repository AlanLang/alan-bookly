import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faPlus } from '@fortawesome/free-solid-svg-icons'
import LayoutTab from './layout/LayoutTab'
import BooksAdd from './screen/BooksAdd'
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

library.add(faBook,faPlus)

class App extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/tab" component={LayoutTab}/>
            <Route path="/add" component={BooksAdd}/>
            <Redirect path="" to={{pathname: '/tab'}} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
