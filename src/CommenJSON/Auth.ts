import Buttons from './Buttons'

export const Auth_Menu: any = {
    all: '管理员',
    user_info: "人员信息",
    attendance: "考勤",
    achievements: "绩效",
    system_user: "系统管理",
    pay_card: "工资卡信息",
}

export const Auth_Btn: any = {
    look: '查看',
    edit: '编辑',
    approve: '审批',
    delete: '删除',
    all: '所有'
}

type Auth = "all" | "edit" | "look" | "approve" | "delete"

type MenuType = "all" | "user_info" | "attendance" | "achievements" | "pay_card"

export const fromAuthToBtn = (btn: Array<Auth>, type: MenuType) => {
    if (btn[0] === 'all') {
        return Buttons[type]
    } else {
        return Buttons[type].filter((btnType: any) => btn.includes(btnType.type))
    }
}


