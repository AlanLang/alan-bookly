import React, { Component } from 'react';
import style from './ComTabar.css'
import {ButtonNavigation,ButtonNavigationItem,Icon} from 'alanui-mobile'
class ComTabar extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab:'book',
      hidden: false,
      fullScreen: false,
    };
  }
  componentWillMount(){
    this.setState({
      selectedTab:this.props.selectedTab
    })
  }
  renderIcon(code){
    return(
      <svg style={{width:"2em",height:"2em"}} aria-hidden="true">
        <use xlinkHref={code}></use>
      </svg> 
    )
  }
  renderItem(){
    let contnet = [];
    if(!this.props.tabar){
      return contnet;
    }
    for(let item of this.props.tabar){
      contnet.push((
        <ButtonNavigationItem 
        key={item.key} 
        label={item.text} 
        icon={this.renderIcon(item.icon)} 
        selectedIcon={this.renderIcon(item.selectedIcon)}/>
      ))
    }
    return contnet;
  }
  handleChange=(v)=>{
    if(this.props.onTabarSelect){
      this.props.onTabarSelect(this.props.tabar[v.index])
    }
  }
  render() {
    return (
      <div className={style.comtabar}>
        <ButtonNavigation onChange={this.handleChange}>
          {this.renderItem()}
        </ButtonNavigation>
      </div>
    );
  }
}

export default ComTabar;