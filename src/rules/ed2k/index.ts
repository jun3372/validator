import Rule from "../rule";

export default class Ed2k extends Rule {
    name = 'ed2k'
    message = 'ed2k地址错误'
    verify(value: any): boolean {
        const reg = /^ed2k:\/\/\|file\|.+\|\/$/
        return reg.test(String(value))
    }
}

