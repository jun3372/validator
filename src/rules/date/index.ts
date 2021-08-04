import Rule from "../rule";

export default class Dater extends Rule {
    name = 'date'
    message = '日期格式错误'
    verify(value: any): boolean {
        const reg = /^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/
        return reg.test(String(value))
    }
}

