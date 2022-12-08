import forge from 'node-forge'
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

export const asrsea = (d: string, e: any, f: any, g: string) => {
    const i = randomString(16)
    const u = aesEncrypt(d, g)
    const encText = aesEncrypt(u, i)
    const encSecKey = rsaEncrypt(i, "010001", "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7")
    console.log(encText)
    console.log(encSecKey)
    return {
        encText,
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