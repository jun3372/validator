import Rule from "../rule";

export default class Min extends Rule {
    name: string = 'min';

    private _min: number = 0;

    // 系统错误信息
    protected message = '验证最小值错误';

    setMin(min: number = 0): this {
        this._min = min
        return this
    }

    verify(value: number): boolean {
        return this._min <= value
    }
}