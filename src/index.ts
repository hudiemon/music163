import cookie from 'cookie'
import {message} from './message'
import {checkIn} from './check-in'
import {request} from './request'
import {asrsea, getEmoji} from "./utils";

const main = async () => {
    if (!process.env.COOKIE) {
        message.error('【cookie】未设置');
        return
    }
    const {__csrf} = cookie.parse(process.env.COOKIE)
    request.defaults.params = {csrf_token: __csrf}
    await checkIn(__csrf)
};
main().finally(message.finally)
