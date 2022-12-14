import {request} from './request'
import {asrsea, getEmoji} from "./utils";
import {message as globalMessage} from "./message";

const checkToken = "9ca17ae2e6ffcda170e2e6ee96ce7b8cb18fd7ce42aa8e8ba3c55e868f9b82c54790a696b4ed60edbb00b7f72af0feaec3b92a939dfd8fee64968f98ccee4b839f8aa2c54b909a8383ed429a87ffbbe65a8bb3ee9e"
export const checkIn = async (type: 0 | 1, csrf_token: string) => {
    const {code, point, msg, message} = await request.post('https://music.163.com/weapi/point/dailyTask',
        asrsea(
            {type, checkToken, csrf_token},
            getEmoji(["流泪", "强"]),
            getEmoji(),
            getEmoji(["爱心", "女孩", "惊恐", "大笑"])
        )
    )
    if (!code) {
        globalMessage.error(`【签到】操作失败`)
        return
    }
    if (code === -2) {
        globalMessage.info(`🍩【签到】${msg}`)
    } else if (code === 200) {
        globalMessage.info(`🍩【签到】操作成功，获得${point}云贝`)
    } else if (code === 403) {
        globalMessage.warning(`【签到】${message}`)
    } else {
        globalMessage.error(`【签到】操作失败`)
    }

}