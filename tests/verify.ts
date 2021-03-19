import { Rule, Validator, validation, ValidationRule } from "../src";

// 验证规则
const rules: Array<ValidationRule> = [
    { key: 'name', 'rule': 'length:2,10', message: '' },
    { key: 'age', 'rule': 'min:18|max:99', message: '年龄必须满足18岁' },
    { key: 'email', 'rule': 'email', message: '请填写正确的邮箱格式' },
    { key: 'phone', rule: 'phone', message: '验证手机号格式错误' },
    { key: 'xxoo_key', rule: 'xxoo', message: '' }
]

// 自定义验证规则
class Xxoo extends Rule {
    // 验证器名称
    name = 'xxoo'

    // 默认验证错误信息
    message = 'xxoo验证错误'

    // 执行验证规则方法
    verify(value: any): boolean {
        return String(value) == 'xxoo'
    }
}

// 需要验证的数据
const data = { name: 'j', age: 17, email: '123@123.com', phone: '135123456781', xxoo_key: 'xxoo-01' }

// 自定义验证规则
const newRule = { xxoo: new Xxoo() }

console.info("\n======= Validator ========");
let validator = new Validator().verify(data, rules, newRule)
let index = 0
while (index < 10) {
    index += 1;
    let error = validator.next()
    if (error) console.error("error=", error);
}
console.error("error=", validator.error());

console.info("\n======= Validation =======");
validator = validation(data, rules, newRule)
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next());
console.error("error=", validator.next(null));
console.error("error=", validator.next('没有任何错误了'));
console.error("error=", validator.next(Error('没有任何错误了')));
console.error("error=", validator.error());
