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
var Ed2k = /** @class */ (function (_super) {
    __extends(Ed2k, _super);
    function Ed2k() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'ed2k';
        _this.message = 'ed2k地址错误';
        return _this;
    }
    Ed2k.prototype.verify = function (value) {
        var reg = /^ed2k:\/\/\|file\|.+\|\/$/;
        return reg.test(String(value));
    };
    return Ed2k;
}(rule_1.default));
exports.default = Ed2k;
