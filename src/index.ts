import cookie from 'cookie'
import {message} from './message'
import {checkIn} from './check-in'
import {request} from './request'
import {sleep} from '@hudiemon/utils'

const main = async () => {
    if (!process.env.COOKIE) {
        message.error('【cookie】未设置');
        return
    }
    const {__csrf: csrf_token} = cookie.parse(process.env.COOKIE)
    request.defaults.params = {csrf_token}
    await checkIn(0, csrf_token)
    await sleep(1500, 2500)
    await checkIn(1, csrf_token)
};
main().finally(message.finally)
