export const message = {
    text: ['网易云音乐'],
    push(str: string) {
        console.log(str)
        this.text.push(str)
    },
}
