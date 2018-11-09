import React, { Component } from 'react';
import style from  './Login.css'

class Login extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div className={style.loginPage}>
        <div className={style.loginTitle}>
          LOGIN
        </div>
        <div className={style.loginForm}>
          <input className={style.loginInput} onChange={e=>this.setState({userName:e.target.value})} type="text" placeholder="用户名" name=""/>
          <input className={style.loginInput} onChange={e=>this.setState({password:e.target.value})} type="text" placeholder="密码" name=""/>
        </div>
      </div>
    );
  }
}

export default Login;