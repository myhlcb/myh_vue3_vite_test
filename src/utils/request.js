import axios from 'axios';
const service = axios.create({
  baseURL: 'http://localhost:7003',
});
// 请求拦截器
service.interceptors.request.use((config) => {
  //头部携带token
  return config;
});
// 相应拦截器

service.interceptors.response.use(
  (res) => {
    //处理statusCode
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default service;
