import axios from 'axios'

// 创建一个单例
const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8001',
    timeout: 5000
})


// 请求拦截(拦截器：interceptors)
instance.interceptors.request.use(config=>{
    return config;
}, err=>{
    return Promise.reject(err);
})

//响应拦截
instance.interceptors.response.use(result=>{
    // 如果请求成功，就返回result.data
    if(result.status == 200){
        return result.data;
    }
    return result;
}, err=>{
    return Promise.reject(err);
})

export default instance;