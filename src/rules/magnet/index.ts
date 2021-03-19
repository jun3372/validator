import Rule from "../rule";

export default class Magnet extends Rule {
    name = 'magnet'
    message = '磁力链接地址错误'
    verify(value: any): boolean {
        const reg = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/
        return reg.test(String(value))
    }
}

