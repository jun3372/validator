import Rule from "../rule";
export default class Postal extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
