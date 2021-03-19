import Rule from "../rule";
export default class Magnet extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
