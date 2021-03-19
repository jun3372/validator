import ValidationRule from "./interface/rules";
import Validator from "./validator";
import Rule from "./rules/rule";

const Validation = (data: Object, map: Array<ValidationRule>, ags?: Object): Validator => {
    return new Validator().verify(data, map, ags)
}

export {
    Rule,
    Validator,
    Validation,
    ValidationRule,
    Validator as validator,
    Validation as validation,
}