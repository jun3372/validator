import Rule from "../rule";
export default class Dater extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
