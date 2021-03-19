import Rule from "../rule";
export default class Base64 extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
