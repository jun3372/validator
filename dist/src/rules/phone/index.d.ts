import Rule from "../rule";
export default class Phone extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
