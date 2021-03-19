"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rule = /** @class */ (function () {
    // 替换用户输入错误信息
    function Rule(message) {
        this.name = "";
        // 默认错误信息
        this.message = '';
        this._message = message || '';
    }
    Object.defineProperty(Rule.prototype, "error", {
        get: function () {
            return this._message || this.message;
        },
        enumerable: false,
        configurable: true
    });
    Rule.prototype.setMessage = function (message) {
        if (message)
            this._message = message;
        return this;
    };
    Rule.prototype.setMax = function (arg0) {
        return this;
    };
    Rule.prototype.setMin = function (arg0) {
        return this;
    };
    Rule.prototype.verify = function (value) {
        throw new Error("Method not implemented.");
    };
    return Rule;
}());
exports.default = Rule;
