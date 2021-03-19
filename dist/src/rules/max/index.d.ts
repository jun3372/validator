import Rule from "../rule";
export default class Max extends Rule {
    name: string;
    private _max;
    protected message: string;
    constructor(message?: string);
    setMax(min?: number): this;
    verify(value: number): boolean;
}
