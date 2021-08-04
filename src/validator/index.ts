import Rule from "../rules/rule";
import Max from "../rules/max";
import Min from "../rules/min";
import Lpr from "../rules/lpr";
import Ed2k from "../rules/ed2k";
import Dater from "../rules/date";
import Email from "../rules/email";
import Phone from "../rules/phone";
import Base64 from "../rules/base64";
import Magnet from "../rules/magnet";
import Length from "../rules/length";
import Postal from "../rules/postal";
import Thunder from "../rules/thunder";
import Required from "../rules/required";
import Password from "../rules/password";

import ErrorItem from "../interface/error";
import ValidationRule from "../interface/rules";

export default class Validator {
    /**
     * 验证失败数组
     */
    private _next: Array<ErrorItem> = []
    protected _error: Array<ErrorItem> = [];

    /**
     * 验证
     * @param data 验证对象
     * @param map 验证规则 map
     * @returns 返回验证器
     */
    verify(data: Object, map: Array<ValidationRule>, ags?: Object): this {
        this._next = []
        this._error = []

        let rules = this.rules();
        if (ags instanceof Object) rules = (<any>Object).assign(rules, ags)

        map.forEach(item => {
            let key = item.key;
            let value: any = data[key];

            item.rule.split('|').forEach(rule => {
                let [r, v] = rule.split(':')
                let ru: Rule | null = rules[r]
                if (ru == null) {
                    let message = `获取需要验证的验证器失败: key=${key}, value=${value}, rule=${rule}`
                    this._error.push({ key: key, value: value, message: message, rule: '' })
                    console.error(message)
                    return
                }

                try {
                    // 设置之定义错误输出
                    ru.setMessage(item.message)
                } catch (e) {
                    console.error('设置自定义错误输出信息失败', "message=", item.message, "rule=", ru)
                    return
                }

                // 设置最小值验证规则
                if (ru.name == 'min') ru.setMin(Number(v))
                //设置最大值验证规则
                if (ru.name == 'max') ru.setMax(Number(v))

                // 设置最小/最大验证规则
                if (ru.name == 'length') {
                    let [min, max] = String(v).split(",")
                    ru.setMin(Number(min)).setMax(Number(max))
                }

                // 执行验证
                try {
                    // 记录错误信息
                    if (!ru.verify(value)) {
                        let error = { key: key, value: value, message: ru.error, rule: ru.name }
                        this._next.push(error)
                        this._error.push(error)
                    }
                } catch (e) {
                    console.error('调用验证器失败', "rule=", ru)
                }
            })
        })

        return this
    }

    /**
     * 获取下一条错误
     * @param ags  不存在错误返回默认值
     * @returns 
     */
    next(ags: any = undefined): ErrorItem | null | undefined {
        return this._next.shift() || ags
    }

    /**
     * 获取所有错误
     * @param ags 
     * @returns 
     */
    error(ags: any = undefined): Array<ErrorItem> | null | undefined {
        return this._error || ags;
    }

    /**
     * 获取默认规则 map
     * @returns 
     */
    protected rules(): Object {
        const rules: Object = {
            "max": new Max(),
            "min": new Min(),
            "lpr": new Lpr(),
            "ed2k": new Ed2k(),
            "date": new Dater(),
            "email": new Email(),
            "phone": new Phone(),
            "postal": new Postal(),
            "base64": new Base64(),
            "length": new Length(),
            "magnet": new Magnet(),
            "thunder": new Thunder(),
            "password": new Password(),
            "required": new Required(),
        }

        return rules
    }
}