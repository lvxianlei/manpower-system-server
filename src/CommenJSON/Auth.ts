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
    all: '所有',
    edit: '编辑',
    look: '查看',
    approve: '审批'
}

type Auth = "all" | "user_info" | "attendance" | "achievements"

export const fromAuthToBtn = (btn: Auth) => {
    return Buttons[btn]
}