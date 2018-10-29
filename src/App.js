import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import styles from './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost,faPlus } from '@fortawesome/free-solid-svg-icons'
import Books from './screen/Books'

library.add(faGhost,faPlus)
class App extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div className={styles.App}>
        <Books></Books>
      </div>
    );
  }
}

export default App;
