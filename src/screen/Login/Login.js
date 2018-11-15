import React, { Component } from 'react';
import style from  './Login.css'
import { Button, WhiteSpace,Toast } from 'antd-mobile';
import sysModel from '../../models/SysModel'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      userName:'',
      password:''
    }
  }
  login(){
    const {userName,password} = this.state
    if(!userName){
      Toast.info('请输入用户名', 1);
      return
    }
    if(!password){
      Toast.info('请输入密码', 1);
      return
    }
    sysModel.login(userName,password).then(re=>{
      // 登录成功，跳转到首页
      this.props.history.push('/tab/book')
    })
  }
  render() {
    return (
      <div className={style.loginPage}>
        <div className={style.loginTitle}>
          达达阅读
        </div>
        <WhiteSpace size="xl"/>
        <div className={style.loginForm}>
          <input className={style.loginInput} onChange={e=>this.setState({userName:e.target.value})} 
          type="text" placeholder="用户名" name=""/>
          <WhiteSpace/>
          <input className={style.loginInput} onChange={e=>this.setState({password:e.target.value})} 
          type="password" placeholder="密码" name=""/>
          <WhiteSpace size="xl"/>
          <WhiteSpace size="xl"/>
          <Button onClick={this.login.bind(this)} type="primary">登录</Button>
          <WhiteSpace size="lg"/>
          <div>
            <div className={style.loginForget}>忘记密码？</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;