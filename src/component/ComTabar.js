import React, { Component } from 'react';
import style from './ComTabar.css'

import { TabBar } from 'antd-mobile';
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
        <TabBar.Item
          title={item.text}
          key={item.key}
          icon={this.renderIcon(item.icon)}
          selectedIcon={this.renderIcon(item.selectedIcon)}
          selected={this.state.selectedTab === item.key}
          badge={0}
          onPress={() => {
            this.setState({
              selectedTab: item.key,
            });
            if(this.props.onTabarSelect){
              this.props.onTabarSelect(item)
            }
            
          }}
        >
        </TabBar.Item>
      ))
    }
    return contnet;
  }
  render() {
    return (
      <div className={style.comtabar}>
      	<TabBar>
          {this.renderItem()}
      	</TabBar>
      </div>
    );
  }
}

export default ComTabar;