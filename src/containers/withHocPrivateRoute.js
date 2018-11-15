import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import tokenUtil from '../utils/TokenUtil';
import { Toast } from 'antd-mobile';

function withHocPrivateRoute(WrappedComponent){
    if(!!!WrappedComponent){
        throw new Error("缺少组件参数");
        return false;
    }
    //withRouter 也是一个高阶组件 传递 history
    return withRouter(
    class extends React.Component{
        constructor(props) {
          super(props);
        }

        componentWillMount(){
            let  isAuthenticated =  tokenUtil.isLogin() ? true :false;
            this.setState({isAuthenticated:isAuthenticated})
            if(!isAuthenticated){
              const {history} = this.props;
              Toast.fail("登陆已过期，请重新登陆",1,re=>{
                history.push('/login')
              })
            }
        }
        render(){
            return this.state.isAuthenticated ?  (
                <WrappedComponent {...this.props} />
            ) : null;
        }
    }
    )
}
export default withHocPrivateRoute;