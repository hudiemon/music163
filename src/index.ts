import './axios';
import {signIn} from './sign-in';
import {message} from './message';
import {feishuHook} from './feishu-hook';

const main = async () => {
    if (!process.env.COOKIE) {
        message.push('❌【cookie】未设置');
        return
    }
    // await signIn({type: 0})
    await signIn({type: 1})
};
main().finally(() => {
    feishuHook(message.text)
})
