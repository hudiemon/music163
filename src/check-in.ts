import {request} from './request'
import {asrsea, getEmoji} from "./utils";

const checkToken = "9ca17ae2e6ffcda170e2e6ee96ce7b8cb18fd7ce42aa8e8ba3c55e868f9b82c54790a696b4ed60edbb00b7f72af0feaec3b92a939dfd8fee64968f98ccee4b839f8aa2c54b909a8383ed429a87ffbbe65a8bb3ee9e"
export const checkIn = async (csrf_token: string) => {
    const {
        encText,
        encSecKey
    } = asrsea(JSON.stringify(
        {
            "type": 1,
            "checkToken": "9ca17ae2e6ffcda170e2e6ee96ce7b8cb18fd7ce42aa8e8ba3c55e868f9b82c54790a696b4ed60edbb00b7f72af0feaec3b92a939dfd8fee64968f98ccee4b839f8aa2c54b909a8383ed429a87ffbbe65a8bb3ee9e",
            "csrf_token": "f3ae8e759715a6ce6d2bf2534529e0aa"
        }
    ), getEmoji(["流泪", "强"]), getEmoji(), getEmoji(["爱心", "女孩", "惊恐", "大笑"]))
    const data = await request.post('https://music.163.com/weapi/point/dailyTask', {
        params: encText,
        encSecKey
    })
    // console.log(data)
}