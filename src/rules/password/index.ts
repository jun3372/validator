import Rule from "../rule";

export default class Password extends Rule {
    name = 'password'

    message = '密码格式错误'

    verify(value: any): boolean {
        const reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
        return reg.test(String(value))
    }
}