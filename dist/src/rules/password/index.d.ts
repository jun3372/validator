import Rule from "../rule";
export default class Password extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
