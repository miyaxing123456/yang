import axios from "axios"

//响应拦截
axios.interceptors.response.use(res => {
    console.log("这次请求的接口地址是：" + res.config.url)
    console.log(res);
    return res;
})

const baseUrl = "/api"

//登录接口
export const requestLogin= (phone,password) => {
    return axios({
        url: baseUrl + "/login",
        method: "get",
        params: {
            phone,
            password
        }
    })
}

//注册请求
export const requestRegi = (phone, password) => {
    return axios({
        url: baseUrl + "/register",
        method: "post",
        data: {
            phone,
            password
        }
    })
}

//首页数据请求
export const requestIndex = () => {
    return axios({
        url: baseUrl + "/getIndexData"
    })
}

//分类数据
export const requestClassify = () => {
    return axios({
        url: baseUrl + "/getClassify"
    })
}

//商品详情
export const requestDetail=(pid)=>{
    return axios({
        url:baseUrl + "/getDetails",
        method:"get",
        params:{
            pid
        }
    })
}