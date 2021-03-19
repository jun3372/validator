import Rule from "../rule";

export default class Thunder extends Rule {
    name = 'thunder'
    message = '迅雷地址错误'
    verify(value: any): boolean {
        const reg = /^thunderx?:\/\/[a-zA-Z\d]+=$/
        return reg.test(String(value))
    }
}

