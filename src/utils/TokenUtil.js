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
    window.localStorage.getItem(key)
  }

  setToken(authToken,rememberMe = false){
    let cookieValue = encodeURIComponent(this.tokenCookieName) + '=';
    let tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * 86400)) : undefined;

    if (authToken) {
        window.localStorage.setItem(this.tokenCookieName, authToken)
    }
    if (tokenExpireDate) {
        window.localStorage.setItem('expires', tokenExpireDate.toUTCString())
    }
    if (this.appPath) {
        window.localStorage.setItem('path', this.appPath)
    }
    if (this.domain) {
        window.localStorage.setItem('domain', this.domain)
    }
    document.cookie = cookieValue;
  }

    // 清空token
  clearToken(): void {
    this.setToken(null,null);
  }
}

const tokenUtil = new TokenUtil()
export default tokenUtil