import axios from 'axios'

// axios的实例
const service = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 2000
})

// axios的请求拦截器
service.interceptors.request.use(config => {
    config.headers['Authorization'] = ''
    return config
    }, error => {
    console.error(error)
    return Promise.reject(error)
})

// axios的响应拦截器
service.interceptors.response.use(response => {
    // // 统一处理状态
    // const res = response.data;
    // if (res.statuscode != 1) { // 需自定义
    //     // 返回异常
    //     return Promise.reject({
    //         status: res.statuscode,
    //         message: res.message
    //     });
    // } else {
        return response
    // }
}, error => {
    console.error(error)
    return Promise.reject(error)
})

export default service
