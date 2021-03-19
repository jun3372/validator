import Rule from "../rule";

export default class Max extends Rule {
    name: string = 'max';

    private _max: number = 0;

    // 系统错误信息
    protected message = '验证最大值错误';


    // 替换用户输入错误信息
    constructor(message?: string) {
        super(message);
    }


    setMax(min: number = 0): this {
        this._max = min
        return this
    }

    verify(value: number): boolean {
        return this._max >= value
    }
}