import Email from "../src/rules/email";
import Max from "../src/rules/max";
import Min from "../src/rules/min";

const email = new Email('填写正确的邮箱格式')
const min = new Min().setMin(2)
const max = new Max().setMax(3)





console.log("email->result:", email.verify('123@123.com'))
console.log("email->error:", email.error)

console.log("min->result:", min.verify(3))
console.log("min->error:", min.error)

console.log("max->result:", max.verify(2))
console.log("max->error:", max.error)