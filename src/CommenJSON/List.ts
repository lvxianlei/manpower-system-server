const List: any = {
    user_info: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions" },
        { name: "id_number", label: "身份证号", type: "text" },
        { name: "age", label: "年龄", type: "number" },
        { name: "gender", label: "性别", type: "select", option: [{ name: 1, label: '男' }, { name: 2, label: '女' }] },
        { name: "division", label: "事业部", type: "option", option: [] },
        { name: "department", label: "部门", type: "select", option: [] },
        { name: "position", label: "职位", type: "select", option: [] },
        { name: "rank", label: "职级", type: "select", option: [] },
        { name: "birth", label: "出生日期", type: "time" },
        { name: "descent", label: "籍贯", type: "text" },
        { name: "nation", label: "民族", type: "option", option: [] },
        { name: "education", label: "学历", type: "option", option: [] },
        { name: "major", label: "专业", type: "phone" },
        { name: "political_face", label: "政治面貌", type: "select", },
        { name: "marriage", label: "婚姻状况", type: "select" },
        { name: "entry_date", label: "入职日期", type: "time" },
        { name: "id_card_address", label: "身份证地址", type: "phone" },
        { name: "special_phone", label: "特殊手机号", type: "phone" },
        { name: "remarks", label: "备注", type: "text" },
        { name: "status", label: "在职状态", type: "select", option: [] },
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