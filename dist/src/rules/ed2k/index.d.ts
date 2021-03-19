import Rule from "../rule";
export default class Ed2k extends Rule {
    name: string;
    message: string;
    verify(value: any): boolean;
}
