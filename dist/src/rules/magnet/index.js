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
var Magnet = /** @class */ (function (_super) {
    __extends(Magnet, _super);
    function Magnet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'magnet';
        _this.message = '磁力链接地址错误';
        return _this;
    }
    Magnet.prototype.verify = function (value) {
        var reg = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/;
        return reg.test(String(value));
    };
    return Magnet;
}(rule_1.default));
exports.default = Magnet;
