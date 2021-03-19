export default class Rule {

    name: string = "";

    // 用户导入错误信息
    protected _message: string;

    // 默认错误信息
    protected message: string = ''

    // 替换用户输入错误信息
    constructor(message?: string) {
        this._message = message || ''
    }

    get error(): string {
        return this._message || this.message;
    }

    setMessage(message?: string): this {
        if (message) this._message = message
        return this
    }


    setMax(arg0: number): this {
        return this
    }

    setMin(arg0: number): this {
        return this
    }

    verify(value: any): boolean {
        throw new Error("Method not implemented.");
    }
}