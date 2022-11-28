import cookie from 'cookie'
import {message} from './message'
import {checkIn} from './check-in'
import {request} from './request'

const main = async () => {
    if (!process.env.COOKIE) {
        message.error('【cookie】未设置');
        return
    }
    const {__csrf} = cookie.parse(process.env.COOKIE)
    request.defaults.params = {csrf_token: __csrf}
    await checkIn()
};
main().finally(message.finally)
