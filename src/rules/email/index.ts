import Rule from "../rule";

export default class Email extends Rule {
    name: string = 'email'

    message: string = '验证邮箱格式失败';

    verify(value: string): boolean {
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        return reg.test(value)
    }
}