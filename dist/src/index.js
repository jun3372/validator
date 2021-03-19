"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = exports.validator = exports.Validation = exports.Validator = exports.Rule = void 0;
var validator_1 = __importDefault(require("./validator"));
exports.Validator = validator_1.default;
exports.validator = validator_1.default;
var rule_1 = __importDefault(require("./rules/rule"));
exports.Rule = rule_1.default;
var Validation = function (data, map, ags) {
    return new validator_1.default().verify(data, map, ags);
};
exports.Validation = Validation;
exports.validation = Validation;
