"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var max_1 = __importDefault(require("../rules/max"));
var min_1 = __importDefault(require("../rules/min"));
var lpr_1 = __importDefault(require("../rules/lpr"));
var ed2k_1 = __importDefault(require("../rules/ed2k"));
var date_1 = __importDefault(require("../rules/date"));
var email_1 = __importDefault(require("../rules/email"));
var phone_1 = __importDefault(require("../rules/phone"));
var base64_1 = __importDefault(require("../rules/base64"));
var magnet_1 = __importDefault(require("../rules/magnet"));
var length_1 = __importDefault(require("../rules/length"));
var postal_1 = __importDefault(require("../rules/postal"));
var thunder_1 = __importDefault(require("../rules/thunder"));
var required_1 = __importDefault(require("../rules/required"));
var password_1 = __importDefault(require("../rules/password"));
var Validator = /** @class */ (function () {
    function Validator() {
        /**
         * 验证失败数组
         */
        this.nexts = [];
        this.errors = [];
    }
    /**
     * 验证
     * @param data 验证对象
     * @param map 验证规则 map
     * @returns 返回验证器
     */
    Validator.prototype.verify = function (data, map, ags) {
        var _this = this;
        this.nexts = [];
        this.errors = [];
        var rules = this.rules();
        if (ags instanceof Object)
            rules = Object.assign(rules, ags);
        map.forEach(function (item) {
            var key = item.key;
            var value = data[key];
            item.rule.split('|').forEach(function (rule) {
                var _a = rule.split(':'), r = _a[0], v = _a[1];
                var ru = rules[r];
                if (ru == null) {
                    var message = "\u83B7\u53D6\u9700\u8981\u9A8C\u8BC1\u7684\u9A8C\u8BC1\u5668\u5931\u8D25: key=" + key + ", value=" + value + ", rule=" + rule;
                    _this.errors.push({ key: key, vlaue: value, message: message });
                    console.error(message);
                    return;
                }
                try {
                    // 设置之定义错误输出
                    ru.setMessage(item.message);
                }
                catch (e) {
                    console.error('设置自定义错误输出信息失败', "message=", item.message, "rule=", ru);
                    return;
                }
                // 设置最小值验证规则
                if (ru.name == 'min')
                    ru.setMin(Number(v));
                //设置最大值验证规则
                if (ru.name == 'max')
                    ru.setMax(Number(v));
                // 设置最小/最大验证规则
                if (ru.name == 'length') {
                    var _b = String(v).split(","), min = _b[0], max = _b[1];
                    ru.setMin(Number(min)).setMax(Number(max));
                }
                // 执行验证
                try {
                    // 记录错误信息
                    if (!ru.verify(value)) {
                        var error = { key: key, vlaue: value, message: ru.error };
                        _this.nexts.push(error);
                        _this.errors.push(error);
                    }
                }
                catch (e) {
                    console.error('调用验证器失败', "rule=", ru);
                }
            });
        });
        return this;
    };
    /**
     * 获取下一条错误
     * @param ags  不存在错误返回默认值
     * @returns
     */
    Validator.prototype.next = function (ags) {
        if (ags === void 0) { ags = undefined; }
        return this.nexts.shift() || ags;
    };
    /**
     * 获取所有错误
     * @param ags
     * @returns
     */
    Validator.prototype.error = function (ags) {
        if (ags === void 0) { ags = undefined; }
        return this.errors || ags;
    };
    /**
     * 获取默认规则 map
     * @returns
     */
    Validator.prototype.rules = function () {
        var rules = {
            "max": new max_1.default(),
            "min": new min_1.default(),
            "lpr": new lpr_1.default(),
            "ed2k": new ed2k_1.default(),
            "date": new date_1.default(),
            "email": new email_1.default(),
            "phone": new phone_1.default(),
            "postal": new postal_1.default(),
            "base64": new base64_1.default(),
            "length": new length_1.default(),
            "magnet": new magnet_1.default(),
            "thunder": new thunder_1.default(),
            "password": new password_1.default(),
            "required": new required_1.default(),
        };
        return rules;
    };
    return Validator;
}());
exports.default = Validator;
