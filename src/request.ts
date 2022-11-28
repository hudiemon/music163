import axios from 'axios';

export const request = axios.create({
    baseURL: "https://music.163.com",
    headers: {
        Cookie: process.env.COOKIE,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    }
})

request.interceptors.response.use((response) =>{
    console.log( response)
    return response.data
})