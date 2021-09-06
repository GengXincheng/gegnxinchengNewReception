//对axios的二次封装
//额外的让axios发请求的时候，具有其他功能
import axios from 'axios'
//引入nprogress相关的
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//以后只要是对axios的二次封装，不会在axios身上直接去封装，而是创建一个新的axios实例进行封装
//axios.create()创建一个新的和axios具有相同功能的一个实例
const service = axios.create({
    baseURL:'/api',//当前项目中所有接口的公共路径
    timeout:20000,
    headers:'',
})

//添加进度条功能     
//对axios添加额外的功能或者给请求头添加额外的信息
// 必然用到axios请求拦截器和响应拦截器
//请求拦截器
service.interceptors.request.use((config)=>{
// config是请求报文  最后一定要返回
Nprogress.start()
return config
},function (error) {
    return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use((response)=>{

    Nprogress.done()
return response.data
},function (error) {
    Nprogress.done()
    //可以同意处理错误
    alert('发送ajjax请求失败'+error.message || "未知错误")
    // return Promise.reject(error)
    return new Promise(()=>{})
})

export default service