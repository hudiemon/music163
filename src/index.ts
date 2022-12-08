import cookie from 'cookie'
import {message} from './message'
import {checkIn_backup} from './check-in'
import {request} from './request'
import {sleep} from '@hudiemon/utils'

const main = async () => {
    if (!process.env.COOKIE) {
        message.error('【cookie】未设置');
        return
    }
    const {__csrf: csrf_token} = cookie.parse(process.env.COOKIE)
    request.defaults.params = {csrf_token}
    await checkIn_backup(0, csrf_token)
    await sleep(1000, 2000)
    await checkIn_backup(1, csrf_token)
};
main().finally(message.finally)
