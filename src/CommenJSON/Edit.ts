const Edit: any = {
    system_setting: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions", prefix: '@', option: ['afc163', 'zombiej', 'yesmeck'] },
        { name: "idNumber", label: "身份证号", type: "text" },
        { name: "phone", label: "手机号", type: "phone" }
    ],
    user_info: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions" },
        { name: "idNumber", label: "身份证号", type: "text" },
        { name: "phone", label: "手机号", type: "phone" }
    ],
    attendance: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions", prefix: '@', option: ['afc163', 'zombiej', 'yesmeck'] },
        { name: "idNumber", label: "身份证号", type: "text" },
        { name: "phone", label: "手机号", type: "phone" },
    ],
    achievements: [
        { name: "username", label: "姓名", type: "text" },
        { name: "email", label: "邮箱", type: "mentions" },
        { name: "idNumber", label: "身份证号", type: "text" },
        { name: "phone", label: "手机号", type: "phone" }
    ],
}

export default Edit