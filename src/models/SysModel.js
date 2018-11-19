import http from '../utils/http'
import tokenUtil from '../utils/TokenUtil'
class SysModel {
  login(userName,password){
    return http.post('user/access/login',{
      mobile:userName,
      password:password
    }).then(re=>{
      console.log(re)
      tokenUtil.setToken(re.token,true)
      return re
    })
  }

  getCurrent(){
    return http.get('user/access/current')
  }
}

const sysModel = new SysModel()
export default sysModel