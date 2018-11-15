import { Toast } from 'antd-mobile';
import tokenUtil from './TokenUtil'

const base_url = "http://langwenda.com:7001/api/"
const codeMessage={
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
const checkStatus = response=>{
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  Toast.fail(`请求错误：${errortext}`);
  throw `请求错误：${errortext}`;
}
const request = (url: string, config: any) => {
  const loading = Toast.loading('正在获取')
  url = base_url + url
  let headers = {headers:{
    'X-Requested-With': 'XMLHttpRequest',
    "Accept": "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization":`Bearer ${tokenUtil.getToken()}`
  }}
  if(config.method === 'UPLOAD'){
    config.method = "POST"
    headers = {headers:{
    }}
  }
  let request = {...config,...headers}
  return fetch(url, request)
  .then(checkStatus)
  .then(response => {
    let res = response.json().then(re=>{
      Toast.hide(loading)
      if(re.code === 0){
        return re.data
      }else{
        if(re.error){
          Toast.fail(re.error)
          return re
        }else{
          Toast.fail("接口访问错误")
          throw re
        }
      }
    });
    return res;
  })
  .catch(e => {
    console.error(e);
    throw e;
  });
}

const http = {
  get:(url: string,params:Object) => {
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
          url += '?' + paramsArray.join('&')
      } else {
          url += '&' + paramsArray.join('&')
      }
    }
    return request(url, {
      method: 'GET'
    });
  },
  post:(url: string, data: any) => {
    return request(url, {
      body: JSON.stringify(data),
      method: 'POST'
    });
  },
  put:(url:string,data:Object) => {
    return request(url, {
      body: JSON.stringify(data),
      method: 'PUT'
    });
  },
  delete:(url:string,params:Object) => {
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
      if (url.search(/\?/) === -1) {
          url += '?' + paramsArray.join('&')
      } else {
          url += '&' + paramsArray.join('&')
      }
    }
    return request(url, {
      method: 'DELETE'
    });
  },
  upload(url,file){
    return request(url, {
      method :"UPLOAD",
      body: file
    });
  }
}
export default http