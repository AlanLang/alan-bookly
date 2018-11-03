import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faPlus } from '@fortawesome/free-solid-svg-icons'
import LayoutTab from './layout/LayoutTab'
import BooksAdd from './screen/BooksAdd'
import BookRead from './screen/BookRead'
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import style from  './index.css';

library.add(faBook,faPlus)

class App extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <Router>
        <div>
          <AnimatedSwitch
            atEnter={{ opacity: 0,left:200 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className={style.switchWrapper}
            >
            <Route path="/tab" component={LayoutTab}/>
            <Route path="/add" component={BooksAdd}/>
            <Route path="/read/:id" component={BookRead}/>
            <Redirect path="" to={{pathname: '/tab'}} />
          </AnimatedSwitch>
        </div>
      </Router>
    );
  }
}

export default App;
