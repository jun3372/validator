import Rule from "../rule";

export default class Required extends Rule {
    // 系统错误信息
    protected message = '必填项验证失败';

    verify(value: any): boolean {
        return typeof value != 'undefined' && value !== '' && value != null && value != undefined
    }
}