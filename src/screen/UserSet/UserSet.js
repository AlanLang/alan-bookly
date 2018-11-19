import React, { Component } from 'react';
import ComTitle from '../../component/ComTitle'
import { Button, Toast, List} from 'antd-mobile';
import tokenUtil from '../../utils/TokenUtil'
import sysModel from '../../models/SysModel'
import style from './UserSet.css'
const Item = List.Item;
class UserSet extends Component {
  constructor () {
    super()
    this.state = {
      user:{
        avatar:""
      }
    }
  }
  componentWillMount(){
    Toast.loading('正在获取')
    sysModel.getCurrent().then(re=>{
      Toast.hide()
      console.log(re)
      this.setState({
        user:re
      })
    })
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
        <div className={style.avatardiv}>
          {this.state.user.avatar?<img src={this.state.user.avatar} className={style.avatar}/>:''}
        </div>
        <List renderHeader={() => '基本信息'} className="my-list">
          <Item extra={this.state.user.realName}>昵称</Item>
          <Item extra={this.state.user.mobile}>手机</Item>
          <Item extra={'男'}>性别</Item>
        </List>
        <Button onClick={this.handleLogout.bind(this)} className={style.exit}>退出</Button>
      </div>
    );
  }
}

export default UserSet;