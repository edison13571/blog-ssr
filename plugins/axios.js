import axios from 'axios'
// import qs from 'qs'


// axios.defaults.baseURL = 'http://192.168.1.171:3000/'
axios.defaults.baseURL = 'https://api.iam66.com/'

export let baseURL = axios.defaults.baseURL
axios.defaults.timeout = 5000

/** d
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

// axios.interceptors.response.use(function (response) {
//   console.log(response)
//   // 对响应数据做点什么
//   // if (!response.data.success) {
//   //   Message({
//   //     message: response.data.message
//   //   })
//   //   // alert(response.data.msg)
//   //   // return Promise.reject(response)
//   // } else {
//   //   return response
//   // }
//   return Promise.resolve(response)
// }, function (error) {
//   console.log(error)
//   // 对响应错误做点什么
//   // if (JSON.stringify(error).indexOf('401') > -1) {
//   //   // alert('登录失效，请重新登录！')
//   //   window.location.href = '/#/login'
//   // } else if (JSON.stringify(error).indexOf('500') > -1) {
//   //   // alert('网络问题，请稍后重试！')
//   // }
//   return Promise.reject(error)
// })

// function handleRes (res, cb) {
//   if (res.code === 1) {
//     window.localStorage.token = ''
//     window.location.href = '/web/login'
//   } else if (res.success) {
//     cb(res)
//   } else {
//     // let str = JSON.stringify(res.message)
//     // let message = str.includes('服务器异常') ? JSON.stringify(res.data) : res.message
//     // Message.error({
//     //   message: message,
//     //   duration: 2000,
//     //   offset: 50
//     // })
//   }
// }



// export function post (url, data = {}) {
//   return new Promise((resolve, reject) => {
//     let headers = {
//       'Content-Type': 'application/json'
//     }
//     // let token = window.localStorage.getItem('token')
//     // if (token) {
//     //   headers.token = token
//     // }
//     let type = { headers }
//     axios.post(url, data, type).then(response => {
//       // handleRes(response.data, resolve)
//       resolve(response.data)
//     }, err => {
//       reject(err)
//     })
//   })
// }


export function get (url, data) {
  let headers = { 'Content-Type': 'multipart/form-data' }
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data, headers: headers })// axios.get(url,{params:data})
      .then(response => {
        resolve(response.data)
        // handleRes(response.data, resolve)
      }, err => {
        reject(err)
      })
  })
}


// 登录
// export function loginAccount (data) {
//   return post('oauth-service/oauth/gm/login', data)
// }
