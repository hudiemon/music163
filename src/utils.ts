import CryptoJS from 'crypto-js'
import {Emoji, md, MD_TYPE} from './emoji'
import random from 'lodash/random'
import RSAKeyPair, {setMaxDigits, encryptedString} from '@hudiemon/rsa'

function aesEncrypt(a: string, b: string) {
    const {AES, enc: {Utf8}, mode: {CBC}} = CryptoJS
    return AES.encrypt(
        Utf8.parse(a),
        Utf8.parse(b),
        {
            iv: Utf8.parse("0102030405060708"),
            mode: CBC
        }).toString()
}

function rsaEncrypt(a: string, b: any, c: any) {
    setMaxDigits(131);
    const d = new RSAKeyPair(b, "", c)
    return encryptedString(d, a)
}

export const asrsea = (d: { [key: string]: any }, e: string, f: string, g: string) => {
    const i = randomString(16)
    const u = aesEncrypt(JSON.stringify(d), g)
    const params = aesEncrypt(u, i)
    const encSecKey = rsaEncrypt(i, e, f)
    return {
        params,
        encSecKey,
    }
}

export const getEmoji = (cxJ8B: MD_TYPE[] = md) => {
    const m8e = cxJ8B.map((key) => Emoji[key])
    return m8e.join("")
};


export const randomString = (length: number, chars: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") => {
    let string = ""
    for (let i = 0; i < length; i++) {
        const pos = random(0, chars.length)
        string += chars.charAt(pos)
    }
    return string
}