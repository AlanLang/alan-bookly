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
  render() {
    return (
      <div>
      	<TabBar>
	      	<TabBar.Item
	            title="书籍"
	            key="book"
	            icon={<FontAwesomeIcon style={{fontSize:20}} className={style.icon} icon="book"/>
	            }
	            selectedIcon={<FontAwesomeIcon style={{fontSize:20}} icon="book"/>
	            }
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
	            icon={<FontAwesomeIcon style={{fontSize:20}} className={style.icon} icon="book"/>
	            }
	            selectedIcon={<FontAwesomeIcon style={{fontSize:20}} icon="book"/>
	            }
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