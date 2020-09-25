import * as Router from 'koa-router'
import DBModel, { SystemUser } from '../DBModel'
import { MapDB, Edit } from '../CommenJSON'
import { success, error } from '../Message'
const router = new Router()

const formatAuthData = (auth_btn: string, auth_menu: string) => {
    const { auth_menu: menuHead, auth_btn: btnHead } = Edit
    const auths = [...auth_menu.split(','), ...auth_btn.split(',')]
    const dataHeads = [...menuHead, ...btnHead]
    const postKeys: any = {}
    dataHeads.forEach((keys: any) => {
        postKeys[keys.name] = auths.includes(keys.name)
    })
    return postKeys
}

router.post('/', async (ctx: any) => {
    try {
        const { type, id } = ctx.data
        if (!type || type === "undefined") { throw "type and id are required !!!"; return }
        const DBType = MapDB[type]
        if (id && id !== 'undefined') {
            const editData = await DBModel[DBType].findOne({
                where: { id },
                attributes: ['id', 'auth_btn', 'auth_menu']
            })
            ctx.body = success({
                auth_menu: Edit.auth_menu,
                auth_btn: Edit.auth_btn || '',
                auth_department: Edit.auth_department,
                id: editData.id,
                data: formatAuthData(editData.auth_btn, editData.auth_menu)
            })
        } else {
            ctx.body = error("id is required !!!")
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

router.put('/', async (ctx: any) => {
    try {
        const { auth_menu, auth_btn, id } = ctx.data
        if (auth_menu && auth_btn && id && auth_menu !== 'undefined' && auth_btn !== 'undefined' && id !== 'undefined') {
            const updateData = await SystemUser.update({ auth_menu, auth_btn }, { where: { id } })
            ctx.body = success("保存成功")
        } else {
            ctx.body = error("数据不能为空！！")
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router