import React, { Component } from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile'
import style from './ComTitle.css'
const Item = Popover.Item;

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
  renderItem(){
    let contnet = [];
    if(!this.props.menu){
      return contnet;
    }
    for(let item of this.props.menu){
      contnet.push((
        <Item key={item.key} value="scan">        
        <svg className = {style.itemIcon} aria-hidden="true">
          <use xlinkHref={item.icon}></use>
        </svg> 
        <span className={style.itemText}>添加书籍</span>
        </Item>))
    }
    return contnet;
  }
  renderRight(){
    if(!this.props.menu){
      return null;
    }
    return(
      <Popover mask
        visible = {this.state.showMenu}
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        overlay={ this.renderItem()}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.handleMenuSelect.bind(this)}
      >
        <div className={style.titleIcon}>
          <Icon type="ellipsis" />
        </div>
      </Popover>)
  }
  render() {
    return (
      <div className={style.group}>
        <NavBar 
        mode="light" 
        icon={"left" === this.props.type?<Icon type="left" />:''} 
        onLeftClick={this.props.onLeftClick}
        rightContent={this.renderRight()}>
          {this.props.children}
        </NavBar>
      </div>
    );
  }
}

export default ComTitle;