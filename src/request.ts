import axios from 'axios';

export const request = axios.create({
    headers: {
        Cookie: process.env.COOKIE,
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        referer: "https://music.163.com/",
        pragma: "no-cache",
        origin: "https://music.163.com",
        "cache-control": "no-cache",
        "sec-ch-ua": `"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"`,
        "Content-Type": "application/x-www-form-urlencoded",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
})

request.interceptors.response.use((response) => {
    console.log(response)
    return response.data
})