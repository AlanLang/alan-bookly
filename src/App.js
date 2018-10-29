import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
