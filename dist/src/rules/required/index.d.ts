import Rule from "../rule";
export default class Required extends Rule {
    protected message: string;
    verify(value: any): boolean;
}
