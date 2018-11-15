import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import { Button} from 'antd-mobile';

class UserSet extends Component {
  constructor () {
    super()
  }
  handleLogin(){
    this.props.history.push('/login')
  }
  render() {
    return (
      <div>
        <ComTitle >我</ComTitle>
        <Button onClick={this.handleLogin.bind(this)} size="small" type="primary">登录</Button>
      </div>
    );
  }
}

export default UserSet;