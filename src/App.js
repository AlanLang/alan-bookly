import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faPlus } from '@fortawesome/free-solid-svg-icons'
import LayoutTab from './layout/LayoutTab'
import BooksAdd from './screen/BooksAdd'
import BookRead from './screen/BookRead'
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import { spring,AnimatedSwitch,AnimatedRoute } from 'react-router-transition';
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
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
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
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};