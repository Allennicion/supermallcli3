import axios from 'axios'

//第三种方法,使用promise
export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      time: 5000
    })
    //拦截请求
    instance.interceptors.request.use(
      config=>{
        return config
      },
      err=>{
      }
    )
    //拦截响应
    instance.interceptors.response.use(
      res=>{
        return res
      },
      err=>{
      }
    )

    //3.发送真正的网络请求
    return instance(config)
}
