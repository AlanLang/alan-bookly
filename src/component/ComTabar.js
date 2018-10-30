import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './ComTitle.css'

import { TabBar } from 'antd-mobile';
class ComTabar extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'book',
      hidden: false,
      fullScreen: false,
    };
  }
  renderItem(code){
    return(
      <svg style={{width:"2em",height:"2em"}} aria-hidden="true">
        <use xlinkHref={code}></use>
      </svg> 
    )
  }
  render() {
    return (
      <div>
      	<TabBar>
	      	<TabBar.Item
	            title="书籍"
	            key="book"
	            icon={this.renderItem("#icon-books")}
	            selectedIcon={this.renderItem("#icon-books-select")}
	            selected={this.state.selectedTab === 'book'}
	            badge={0}
	            onPress={() => {
	              this.setState({
	                selectedTab: 'book',
	              });
	            }}
	          >
	          </TabBar.Item>
	          	<TabBar.Item
	            title="统计"
	            key="pie"
              icon={this.renderItem("#icon-piechart")}
              selectedIcon={this.renderItem("#icon-piechart-select")}
	            selected={this.state.selectedTab === 'booka'}
	            badge={0}
	            onPress={() => {
	              this.setState({
	                selectedTab: 'booka',
	              });
	            }}
	          >
	          </TabBar.Item>
      	</TabBar>
      </div>
    );
  }
}

export default ComTabar;