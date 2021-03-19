import Rule from "../rule";
export default class Email extends Rule {
    name: string;
    message: string;
    verify(value: string): boolean;
}
