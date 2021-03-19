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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rule_1 = __importDefault(require("../rule"));
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // 替换用户输入错误信息
    function Max(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'max';
        _this._max = 0;
        // 系统错误信息
        _this.message = '验证最大值错误';
        return _this;
    }
    Max.prototype.setMax = function (min) {
        if (min === void 0) { min = 0; }
        this._max = min;
        return this;
    };
    Max.prototype.verify = function (value) {
        return this._max >= value;
    };
    return Max;
}(rule_1.default));
exports.default = Max;
