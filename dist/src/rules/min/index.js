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
var Min = /** @class */ (function (_super) {
    __extends(Min, _super);
    function Min() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'min';
        _this._min = 0;
        // 系统错误信息
        _this.message = '验证最小值错误';
        return _this;
    }
    Min.prototype.setMin = function (min) {
        if (min === void 0) { min = 0; }
        this._min = min;
        return this;
    };
    Min.prototype.verify = function (value) {
        return this._min <= value;
    };
    return Min;
}(rule_1.default));
exports.default = Min;
