import {request} from './request'
import {asrsea, getEmoji} from "./utils";
import {message as globalMessage} from "./message";

export const checkIn_backup = async (type: 0 | 1, csrf_token: string) => {
    const {
        code,
        point,
        msg,
        message
    } = await request.get('https://music.163.com/api/point/dailyTask', {
        params: {
            type,
            csrf_token
        }
    })
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