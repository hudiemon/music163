import axios from 'axios';

// axios.defaults.baseURL = 'https://music.163.com';
axios.defaults.headers.common['Cookie'] = process.env.COOKIE;
axios.defaults.headers.common['Content-Type'] = "application/json;charset=UTF-8";
axios.interceptors.response.use((response: any) => response.data);
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     console.log(config)
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });
