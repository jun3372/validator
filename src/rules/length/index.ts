import Rule from "../rule";

export default class Length extends Rule {
    name: string = 'length';
    private _max: number = 0;
    private _min: number = 0;

    // 系统错误信息
    protected message = '验证格式长度错误';

    setMax(max: number = 0): this {
        this._max = max
        return this
    }

    setMin(min: number = 0): this {
        this._min = min
        return this
    }

    verify(value: any): boolean {
        let len = String(value).length
        return this._max > len && len > this._min
    }
}