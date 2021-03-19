interface Rules {
    // 验证规则名称
    name: string

    // 获取错误信息
    error: string

    // 执行验证并返回结果
    verify(value: any): boolean
}

export default interface ValidationRule {
    key: string
    rule: string
    message: string
}