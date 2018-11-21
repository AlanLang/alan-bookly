class TokenUtil {
  appPath = '/';
  tokenCookieName = 'Alan.WebBed';
  domain = undefined;

  isLogin(){
    if(this.getToken()){
      let exp = this.get('expires')
      if(exp && new Date(exp) > new Date()){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
  getToken(){
    const key = this.tokenCookieName
    return this.get(key)
  }

  get(key){
    return localStorage.getItem(key)
  }

  setToken(authToken,rememberMe = false){
    let tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * 86400)) : undefined;

    if (authToken) {
        localStorage.setItem(this.tokenCookieName, authToken)
    }
    if (tokenExpireDate) {
        localStorage.setItem('expires', tokenExpireDate.toUTCString())
    }
  }

    // 清空token
  clearToken(): void {
    localStorage.clear();
  }
}

const tokenUtil = new TokenUtil()
export default tokenUtil