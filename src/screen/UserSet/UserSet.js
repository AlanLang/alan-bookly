import React, { Component } from 'react';
import ComTitle from '../../component/ComTitle'
import {Button,MessageBox,List, ListItem, ListItemText,ListItemAction} from 'alanui-mobile';
import tokenUtil from '../../utils/TokenUtil'
import sysModel from '../../models/SysModel'
import storage from '../../utils/StorageUtil'
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
    let user = storage.get('user')
    if(user){
      this.setState({
        user:JSON.parse(user)
      })
    }
    sysModel.getCurrent().then(re=>{
      this.setState({
        user:re
      })
      storage.set("user",JSON.stringify(re))
    })
  }
  handleLogout(){
    MessageBox.confirm({
      title:'提示',
      message:'确定要退出吗？',
      onClose:()=>{
        tokenUtil.clearToken()
        this.props.history.push('/login')
      }
    })
  }

  render() {
    return (
      <div style={{marginTop:50}}>
        <ComTitle >我</ComTitle>
        <div className={style.avatardiv}>
          {this.state.user.avatar?<img src={this.state.user.avatar} className={style.avatar}/>:''}
        </div>
        <List header="基本信息" className="my-list">
          <ListItem>
              <ListItemAction>
                昵称
              </ListItemAction>
              <ListItemText style={{textAlign:'right'}}>
                {this.state.user.realName}
              </ListItemText>
          </ListItem>
          <ListItem>
              <ListItemAction>
                手机
              </ListItemAction>
              <ListItemText style={{textAlign:'right'}}>
                {this.state.user.mobile}
              </ListItemText>
          </ListItem>
        </List>
        <div className={style.buttonGroup}>
          <Button theme="danger" block={true} onClick={this.handleLogout.bind(this)}>退出</Button>
        </div>
      </div>
    );
  }
}

export default UserSet;