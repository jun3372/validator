import Rule from "../rule";
export default class Length extends Rule {
    name: string;
    private _max;
    private _min;
    protected message: string;
    setMax(max?: number): this;
    setMin(min?: number): this;
    verify(value: any): boolean;
}
