"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
// 验证规则
var rules = [
    { key: 'name', 'rule': 'length:2,10', message: '' },
    { key: 'age', 'rule': 'min:18|max:99', message: '年龄必须满足18岁' },
    { key: 'email', 'rule': 'email', message: '请填写正确的邮箱格式' },
    { key: 'phone', rule: 'phone', message: '验证手机号格式错误' },
    { key: 'xxoo_key', rule: 'xxoo', message: '' }
];
// 自定义验证规则
var Xxoo = /** @class */ (function (_super) {
    __extends(Xxoo, _super);
    function Xxoo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 验证器名称
        _this.name = 'xxoo';
        // 默认验证错误信息
        _this.message = 'xxoo验证错误';
        return _this;
    }
    // 执行验证规则方法
    Xxoo.prototype.verify = function (value) {
        return String(value) == 'xxoo';
    };
    return Xxoo;
}(src_1.Rule));
// 需要验证的数据
var data = { name: 'j', age: 17, email: '123@123.com', phone: '135123456781', xxoo_key: 'xxoo-01' };
// 自定义验证规则
var newRule = { xxoo: new Xxoo() };
console.info("\n======= Validator ========");
var validator = new src_1.Validator().verify(data, rules, newRule);
var index = 0;
while (index < 10) {
    index += 1;
    var error = validator.next();
    if (error)
        console.error("error=", error);
}
console.error("error=", validator.error());
console.info("\n======= Validation =======");
validator = src_1.validation(data, rules, newRule);
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next(null));
console.error("error=", validator.next('没有任何错误了'));
console.error("error=", validator.next(Error('没有任何错误了')));
console.error("error=", validator.error());
console.error("validator=", validator);
