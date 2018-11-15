import React, { Component } from 'react';
import ComTitle from '../component/ComTitle'
import { Button} from 'antd-mobile';
import tokenUtil from '../utils/TokenUtil'

class UserSet extends Component {
  constructor () {
    super()
  }
  handleLogin(){
    this.props.history.push('/login')
  }
  handleLogout(){
    tokenUtil.clearToken()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <ComTitle >我</ComTitle>
        <Button onClick={this.handleLogin.bind(this)} size="small" type="primary">登录</Button>
        <Button onClick={this.handleLogout.bind(this)} size="small" type="primary">退出</Button>
      </div>
    );
  }
}

export default UserSet;