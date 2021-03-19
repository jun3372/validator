"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = __importDefault(require("../src/rules/email"));
var max_1 = __importDefault(require("../src/rules/max"));
var min_1 = __importDefault(require("../src/rules/min"));
var email = new email_1.default('填写正确的邮箱格式');
var min = new min_1.default().setMin(2);
var max = new max_1.default().setMax(3);
console.log("email->result:", email.verify('123@123.com'));
console.log("email->error:", email.error);
console.log("min->result:", min.verify(3));
console.log("min->error:", min.error);
console.log("max->result:", max.verify(2));
console.log("max->error:", max.error);
