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

const Edit: any = {
    system_setting: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions", prefix: '@', option: ['afc163', 'zombiej', 'yesmeck'] },
        { name: "id_number", label: "身份证号", type: "text" },
        { name: "phone", label: "手机号", type: "phone" }
    ],
    user_info: [
        { name: "division", label: "事业部", type: "option", option: [] },
        { name: "department", label: "部门", type: "select", option: [] },
        { name: "position", label: "职务", type: "select", option: [] },
        { name: "username", label: "姓名", type: "text" },
        { name: "rank", label: "职级", type: "select", option: [] },
        { name: "gender", label: "性别", type: "select", option: [{ name: 1, label: '男' }, { name: 2, label: '女' }] },
        { name: "birth", label: "出生年月", type: "time" },
        { name: "descent", label: "籍贯", type: "text" },
        { name: "nation", label: "民族", type: "option", option: nationOption },
        { name: "education", label: "文化程度", type: "option", option: [] },
        { name: "graduation_school", label: "毕业学校", type: "text" },
        { name: "major", label: "专业", type: "phone" },
        { name: "political_face", label: "政治面貌", type: "select", },
        { name: "marriage", label: "婚育状况", type: "select" },
        { name: "entry_date", label: "入职时间", type: "time" },
        { name: "id_card_address", label: "身份证住址", type: "phone" },
        { name: "phone", label: "联系电话", type: "phone" },
        { name: "special_phone", label: "特殊联系电话", type: "phone" },
        { name: "id_number", label: "身份证号码", type: "text" },
        { name: "email", label: "电子邮箱", type: "mentions" },
        { name: "experience", label: "我公司经历", type: "text" },
        { name: "remarks", label: "备注", type: "text" },
        { name: "age", label: "年龄", type: "number" },
        { name: "status", label: "在职状态", type: "select", option: [{ name: 1, label: '在职' }, { name: 2, label: '离职' }] },
    ],
    attendance: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions", prefix: '@', option: ['afc163', 'zombiej', 'yesmeck'] },
        { name: "id_number", label: "身份证号", type: "text" },
        { name: "phone", label: "手机号", type: "phone" },
    ],
    achievements: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions" },
        { name: "id_number", label: "身份证号", type: "text" },
        { name: "phone", label: "手机号", type: "phone" }
    ],
    auth_menu: [
        { name: 'user_info', label: '人员信息', type: "switch" },
        { name: 'attendance', label: '考勤', type: "switch" },
        { name: 'achievements', label: '绩效', type: "switch" },
        { name: 'pay_card', label: '工资卡信息', type: "switch" },
        { name: 'system_user', label: '系统管理', type: "switch" }
    ],
    auth_btn: [
        { name: 'edit', label: '编辑', type: "switch" },
        { name: 'delete', label: '删除', type: "switch" },
        { name: 'look', label: '查看', type: "switch" },
        { name: 'approve', label: '审批', type: "switch" }
    ],
    auth_department: [
        { name: 'edit', label: '编辑', type: "switch" },
        { name: 'delete', label: '删除', type: "switch" },
        { name: 'look', label: '查看', type: "switch" },
        { name: 'approve', label: '审批', type: "switch" }
    ],
}

export default Edit