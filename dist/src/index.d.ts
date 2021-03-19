import ValidationRule from "./interface/rules";
import Validator from "./validator";
import Rule from "./rules/rule";
declare const Validation: (data: Object, map: Array<ValidationRule>, ags?: Object | undefined) => Validator;
export { Rule, Validator, Validation, ValidationRule, Validator as validator, Validation as validation, };
