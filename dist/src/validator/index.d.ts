import ErrorItem from "../interface/error";
import ValidationRule from "../interface/rules";
export default class Validator {
    /**
     * 验证失败数组
     */
    private nexts;
    protected errors: Array<ErrorItem>;
    /**
     * 验证
     * @param data 验证对象
     * @param map 验证规则 map
     * @returns 返回验证器
     */
    verify(data: Object, map: Array<ValidationRule>, ags?: Object): this;
    /**
     * 获取下一条错误
     * @param ags  不存在错误返回默认值
     * @returns
     */
    next(ags?: any): ErrorItem | null | undefined;
    /**
     * 获取所有错误
     * @param ags
     * @returns
     */
    error(ags?: any): Array<ErrorItem> | null | undefined;
    /**
     * 获取默认规则 map
     * @returns
     */
    protected rules(): Object;
}
