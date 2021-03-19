import Rule from "../rule";
export default class Datev extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
