import Rule from "../rule";
export default class Thunder extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
