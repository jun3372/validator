import Rule from "../rule"

export default class Phone extends Rule {
    name: string = 'phone'
    message: string = '验证手机号格式错误'

    verify(value: any): boolean {
        let reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
        return reg.test(String(value))
    }
}