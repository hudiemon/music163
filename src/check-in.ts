import forge from 'node-forge'
import {request} from './request'
import {message} from "./message"

const encrypt = (message: string, key: string) => {
    const cipher = forge.cipher.createCipher('AES-CBC', key)
    cipher.start({
        iv: "0102030405060708"
    });
    let add = 16
    const length = 16
    const count = message.length
    if (count % 6 !== 0) {
        add = length - (count % length)
    }
    const pad = String.fromCharCode(add)
    console.log('pad',pad)
    console.log(count + (pad * add))
    cipher.update()
    cipher.finish()
    console.log(cipher.output)
    // const encrypted = forge.util.encode64(cipher.output)
}

export const checkIn = async () => {
    encrypt('{"type":0}', "0CoJUm6Qyw8W8jud")
    // encrypt(, "TA3YiYCfY2dDJQgg")
    // const data = await request.post('/weapi/point/dailyTask', "params=NxtH9Gtgf2%2FFSzA7OZkUV%2FTOUxtd1PFki%2Fx1hUoUj1e15Y4JG0tSSL5DdWNiAm%2Fc1W6vhYlW3DKHpfmo4uCKjpZDUuRTn45jQVC7Km%2FupnyU%2BP0VleYjWDsxWgPei6f3U3hGJ9nSHu%2BlKJWR0RcQFg%3D%3D&encSecKey=d324de947156ac6ae6af517fc283e3cbd2ab52f2c549aefe0086fb2c7916942110f3a4a6bbe1dcc6cea654c4adde12e570fd6018826777bd581237b201b2519a67d6656a9b4798740f5b242ce0719c85ef80076bab8a488c71cee62516c4419636af971765e3e5d2120b9f34288e2c1ae0d492f666aaa2983bd75325c3fe3206")
    // console.log(data)
    // {msg, point}
    // message.info(`🎉【签到】${point ?? msg}`);
}