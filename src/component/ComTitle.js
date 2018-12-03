import React, { Component } from 'react';
import {NavBar,Button,Icon} from 'alanui-mobile'
import style from './ComTitle.css'

class ComTitle extends Component {
  constructor () {
    super()
    this.state = {
      showMenu:false
    };
  }
  handleMenuSelect(re){
    this.setState({
      showMenu:false
    })
    this.props.onSelect(re)
  }
  renderLeft(){
    if(this.props.hasLeft){
      return (<Button onClick={this.props.onLeftClick}>
                    <Icon icon="arrow_back_ios" style={{color:'#108ee9'}}/>
                </Button>)
    }
  }
  render() {
    return (
      <div className={style.group}>
        <NavBar
          style={{height:40,backgroundColor:'#fff',color:'#000',boxShadow: '0 2px 4px -1px rgba(0,0,0,.2)'}}
          left={this.renderLeft()}
          center={this.props.children}
        />
      </div>
    );
  }
}

export default ComTitle;