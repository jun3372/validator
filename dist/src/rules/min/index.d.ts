import Rule from "../rule";
export default class Min extends Rule {
    name: string;
    private _min;
    protected message: string;
    setMin(min?: number): this;
    verify(value: number): boolean;
}
