import http from '../utils/http'
class SysModel {
  login(userName,password){
    return http.post('user/access/login',{
      mobile:userName,
      password:password
    })
  }
}

const sysModel = new SysModel()
export default sysModel