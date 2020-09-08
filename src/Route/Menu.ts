import * as Router from 'koa-router'
import { Menu } from '../CommenJSON'
import { success, error } from '../Message'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { auth_menu } = ctx.operator
        if (auth_menu === "all") {
            const menu = Object.keys(Menu).map((menu: any) => (Menu[menu]))
            ctx.body = success(menu)
        } else if (auth_menu) {
            const menu = auth_menu.split(',')
            const menuData = menu.map((item: string) => (Menu[item]))
            ctx.body = success(menuData)
        } else {
            ctx.body = error("暂无任何权限，请联系管理员", 0)
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router