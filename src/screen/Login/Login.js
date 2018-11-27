import React, { Component } from 'react';
import style from  './Login.css'
//import Button from '@material-ui/core/Button';
import {Button} from 'alanui-mobile';
//import Button, { ButtonGroup } from '../components/Button';
import Snackbar from '@material-ui/core/Snackbar';
import sysModel from '../../models/SysModel'
import TextField from '@material-ui/core/TextField';

class Login extends Component {
  constructor () {
    super()
    this.state = {
      userName:'',
      password:'',
      open:false,
      toastMsg:'请输入用户名'
    }
  }
  handleClose(){
    this.setState({ open: false });
  }
  login(){
    const {userName,password} = this.state
    if(!userName){
      this.setState({ open: true, toastMsg:'请输入用户名'});
      return true
    }
    if(!password){
      this.setState({ open: true, toastMsg:'请输入密码'});
      return true
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
        <div className={style.loginForm}>
          <TextField
            label="用户名"
            value={this.state.name}
            onChange={e=>this.setState({userName:e.target.value})}
            margin="normal"
          />
          <TextField
            label="密码"
            type="password"
            value={this.state.password}
            onChange={e=>this.setState({password:e.target.value})}
            margin="normal"
          />
          <div style={{marginTop:36}}>
            <Button block={true} onClick={this.login.bind(this)} theme="primary">登录</Button>
          </div>
          <div style={{marginTop:12}}>
            <div className={style.loginForget}>忘记密码？</div>
          </div>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose.bind(this)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.toastMsg}</span>}
        />
      </div>
    );
  }
}

export default Login;