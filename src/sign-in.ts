import axios from "axios";
import {message} from "./message";

export const signIn = async ({type}: any) => {
    return axios.get('http://music.163.com/api/point/dailyTask', {
        params: {
            type,
            csrf_token: 123
        }
    }).then(({msg, point}) => {
        message.push(`🎉【签到】${point ?? msg}`);
    })
}