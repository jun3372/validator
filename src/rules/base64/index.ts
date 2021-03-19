import Rule from "../rule";

export default class Base64 extends Rule {
    name = 'base64'
    message = 'base64内容错误'
    verify(value: any): boolean {
        const reg = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i
        return reg.test(String(value))
    }
}

