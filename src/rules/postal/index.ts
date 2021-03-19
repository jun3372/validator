import Rule from "../rule";

export default class Postal extends Rule {
    name = 'postal'
    message = '邮政编码错误'
    verify(value: any): boolean {
        const reg = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
        return reg.test(String(value))
    }
}

