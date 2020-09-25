interface Nation {
    name: number;
    label: string;
}

export const nationOption: Array<Nation> = [
    { name: 1, label: '汉' }, { name: 2, label: '壮' }, { name: 3, label: '满' }, { name: 4, label: '回' },
    { name: 5, label: '苗' }, { name: 6, label: ' 维吾尔' }, { name: 7, label: '土家' }, { name: 8, label: '彝' },
    { name: 9, label: '蒙古' }, { name: 10, label: '藏' }, { name: 11, label: '布依' }, { name: 12, label: '侗' },
    { name: 13, label: '瑶' }, { name: 14, label: '朝鲜' }, { name: 15, label: '白' }, { name: 16, label: '哈尼' },
    { name: 17, label: '哈萨克' }, { name: 18, label: '黎' }, { name: 19, label: '傣' }, { name: 20, label: '畲' },
    { name: 21, label: '傈僳' }, { name: 22, label: '仡佬' }, { name: 23, label: '东乡' }, { name: 24, label: '高山' },
    { name: 25, label: '拉祜' }, { name: 26, label: '水' }, { name: 27, label: '佤' }, { name: 28, label: '纳西' },
    { name: 29, label: '羌' }, { name: 30, label: '土' }, { name: 31, label: '仫佬' }, { name: 32, label: '锡伯' },
    { name: 33, label: '柯尔克孜' }, { name: 34, label: '达斡尔' }, { name: 35, label: '景颇' }, { name: 36, label: '毛南' },
    { name: 37, label: '撒拉' }, { name: 38, label: '塔吉克' }, { name: 39, label: '阿昌' }, { name: 40, label: '普米' },
    { name: 41, label: '鄂温克' }, { name: 42, label: '怒' }, { name: 43, label: '京' }, { name: 44, label: '基诺' },
    { name: 45, label: '德昂' }, { name: 46, label: '保安' }, { name: 47, label: '俄罗斯' }, { name: 48, label: '裕固' },
    { name: 49, label: '乌兹别克' }, { name: 50, label: '门巴' }, { name: 51, label: '鄂伦春' }, { name: 52, label: '独龙' },
    { name: 53, label: '塔塔尔' }, { name: 54, label: '赫哲' }, { name: 55, label: '珞巴' }, { name: 56, label: '布朗' },
]

const List: any = {
    user_info: [
        { name: "division", label: "事业部", type: "select", option: [] },
        { name: "department", label: "部门", type: "select", option: [] },
        { name: "position", label: "职务", type: "select", option: [] },
        { name: "username", label: "姓名", type: "string" },
        { name: "rank", label: "职级", type: "select", option: [] },
        { name: "gender", label: "性别", type: "select", option: [{ name: 1, label: '男' }, { name: 2, label: '女' }] },
        { name: "birth", label: "出生年月", type: "time", format: 'YYYY-MM-DD' },
        { name: "descent", label: "籍贯", type: "string" },
        { name: "nation", label: "民族", type: "select", option: nationOption },
        { name: "education", label: "文化程度", type: "select", option: [] },
        { name: "graduation_school", label: "毕业学校", type: "string" },
        { name: "major", label: "专业", type: "select" },
        { name: "political_face", label: "政治面貌", type: "select", },
        { name: "marriage", label: "婚育状况", type: "select" },
        { name: "entry_date", label: "入职时间", type: "time", format: 'YYYY-MM-DD' },
        { name: "id_card_address", label: "身份证住址", type: "string" },
        { name: "phone", label: "联系电话", type: "phone" },
        { name: "special_phone", label: "特殊联系电话", type: "phone" },
        { name: "id_number", label: "身份证号码", type: "string" },
        { name: "email", label: "电子邮箱", type: "mentions" },
        { name: "experience", label: "我公司经历", type: "text" },
        { name: "remarks", label: "备注", type: "text" },
        { name: "age", label: "年龄", type: "number" },
        { name: "status", label: "在职状态", type: "select", option: [{ name: '1', label: '在职' }, { name: '2', label: '离职' }] }
    ],
    attendance: [
        { name: "username", label: "姓名", type: "string" },
        { name: "division", label: "事业部", type: "select", option: [] },
        { name: "department", label: "部门", type: "select", option: [] },
        { name: "position", label: "职务", type: "select", option: [] },
        { name: "attendance", label: "出勤", type: "string" },
        { name: "business_leave", label: "事假", type: "string" },
        { name: "disease_leave", label: "病假", type: "string" },
        { name: "public_holidays", label: "公休假日", type: "string" },
        { name: "legal_holiday", label: "法定假日", type: "string" },
        { name: "work_home", label: "在家办公", type: "string" },
        { name: "remark", label: "备注", type: "text" }
    ],
    achievements: [
        { name: "username", label: "绩效", type: "string" },
        { name: "email", label: "邮箱", type: "mentions" },
        { name: "id_number", label: "身份证号", type: "string" },
        { name: "phone", label: "联系电话", type: "phone" }
    ],
    system_setting: [
        { name: "username", label: "姓名", type: "string" },
        { name: "email", label: "邮箱", type: "mentions" },
        { name: "id_number", label: "身份证号", type: "string" },
        { name: "phone", label: "联系电话", type: "phone" }
    ],
    pay_card: [
        { name: "username", label: "人员姓名", type: "string" },
        { name: "division", label: "单位", type: "string" },
        { name: "department", label: "部门", type: "string" },
        { name: "id_number", label: "身份证号码", type: "string" },
        { name: "phone", label: "联系电话", type: "phone" },
        { name: "pay_card_hz", label: "汇泽银行卡", type: "string" },
        { name: "pay_card_zg", label: "中国银行卡号", type: "string" },
        { name: "pay_card_address", label: "开户行地址", type: "string" },
    ]
}

export default List