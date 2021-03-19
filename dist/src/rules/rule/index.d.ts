export default class Rule {
    name: string;
    protected _message: string;
    protected message: string;
    constructor(message?: string);
    get error(): string;
    setMessage(message?: string): this;
    setMax(arg0: number): this;
    setMin(arg0: number): this;
    verify(value: any): boolean;
}
