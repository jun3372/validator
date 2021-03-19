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
var Length = /** @class */ (function (_super) {
    __extends(Length, _super);
    function Length() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'length';
        _this._max = 0;
        _this._min = 0;
        // 系统错误信息
        _this.message = '验证格式长度错误';
        return _this;
    }
    Length.prototype.setMax = function (max) {
        if (max === void 0) { max = 0; }
        this._max = max;
        return this;
    };
    Length.prototype.setMin = function (min) {
        if (min === void 0) { min = 0; }
        this._min = min;
        return this;
    };
    Length.prototype.verify = function (value) {
        var len = String(value).length;
        return this._max > len && len > this._min;
    };
    return Length;
}(rule_1.default));
exports.default = Length;
