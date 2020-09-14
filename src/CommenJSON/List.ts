import { nationOption } from './Edit'
const List: any = {
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
        { name: "email", label: "电子邮箱", type: "email" },
        { name: "experience", label: "我公司经历", type: "text" },
        { name: "remarks", label: "备注", type: "text" },
        { name: "age", label: "年龄", type: "number" },
        { name: "status", label: "在职状态", type: "select", option: [{ name: '1', label: '在职' }, { name: '2', label: '离职' }] }
    ],
    attendance: [
        { name: "username", label: "考勤", type: "string" },
        { name: "email", label: "邮箱", type: "string" },
        { name: "id_number", label: "身份证号", type: "string" },
        { name: "phone", label: "手机号", type: "string" }
    ],
    achievements: [
        { name: "username", label: "绩效", type: "string" },
        { name: "email", label: "邮箱", type: "string" },
        { name: "id_number", label: "身份证号", type: "string" },
        { name: "phone", label: "手机号", type: "string" }
    ],
    system_setting: [
        { name: "username", label: "姓名", type: "string" },
        { name: "email", label: "邮箱", type: "string" },
        { name: "id_number", label: "身份证号", type: "string" },
        { name: "phone", label: "手机号", type: "string" }
    ],
    pay_card: [
        { name: "username", label: "人员姓名", type: "string" },
        { name: "division", label: "单位", type: "string" },
        { name: "department", label: "部门", type: "string" },
        { name: "id_number", label: "身份证号码", type: "string" },
        { name: "phone", label: "电话号码", type: "string" },
        { name: "pay_card_hz", label: "汇泽银行卡", type: "string" },
        { name: "pay_card_zg", label: "中国银行卡号", type: "string" },
        { name: "pay_card_address", label: "开户行地址", type: "string" },
    ]
}

export default List