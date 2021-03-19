import Rule from "../rule";
export default class Lpr extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
