

const Edit: any = {
    system_setting: [
        { name: "username", label: "姓名", type: "string" },
        { name: "email", label: "邮箱", type: "mentions", prefix: '@', option: ['afc163', 'zombiej', 'yesmeck'] },
        { name: "id_number", label: "身份证号", type: "string" },
        { name: "phone", label: "手机号", type: "phone" }
    ],
    user_info: [
        { name: "division", label: "事业部", type: "select", option: [] },
        { name: "department", label: "部门", type: "select", option: [] },
        { name: "position", label: "职务", type: "select", option: [] },
        { name: "username", label: "姓名", type: "string" },
        { name: "rank", label: "职级", type: "select", option: [] },
        { name: "gender", label: "性别", type: "select", option: [{ name: 1, label: '男' }, { name: 2, label: '女' }] },
        { name: "birth", label: "出生年月", type: "time" },
        { name: "descent", label: "籍贯", type: "text" },
        { name: "nation", label: "民族", type: "select", option: [] },
        { name: "education", label: "文化程度", type: "select", option: [] },
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
        { name: 'look', label: '查看', type: "switch" },
        { name: 'edit', label: '编辑', type: "switch" },
        { name: 'delete', label: '删除', type: "switch" },
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