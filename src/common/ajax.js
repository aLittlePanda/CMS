import axios from 'axios'
let instance = axios.create({
  timeout: 20000,
  headers: {
    //  'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
}
)
const TOKEN = 'token'
const HEAD_PATH = '/cny'

const obj = {
  post (url, params, content, callback, errorBack) {
    handleAjax(url, 'post', params, content, callback, errorBack)
  },
  get (url, params, callback, errorBack) {
    handleAjax(url, 'get', params, {}, callback, errorBack)
  },
  setToken (token) {
    localStorage[TOKEN] = token
  },
  getToken () {
    return localStorage[TOKEN]
  },
  gotoLogin () {
    delete localStorage[TOKEN]
    window.top.location = '/'
  }
}

function handleAjax (url, type, params, content, callback, errorBack) {
  if (!errorBack) {
    errorBack = () => {}
  }
  if (localStorage[TOKEN]) {
    instance.defaults.headers.common[TOKEN] = localStorage[TOKEN]
  }
  return instance({
    method: type,
    url: HEAD_PATH + url,
    params: params,
    data: content // qs.stringify(content)
  }).then((resp) => {
    handleSuccess(resp, callback, errorBack)
  }, (error) => {
    handleError(errorBack)
  }
  )
}

function handleError (errorBack) {
  let value = {}
  value.code = -1
  value.msg = '网络异常，请检查网络设置!'
  errorBack(value)
}

function handleSuccess (resp, callback, errorBack) {
  let value = resp.data
  switch (value.code) {
    case 0: callback(value)//  成功
      break
    case 401: obj.gotoLogin()//  未登录
      break
    default: errorBack(value)
      break
  }
}
export default obj
