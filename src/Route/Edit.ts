import * as Router from 'koa-router'
import DBModel from '../DBModel'
import { MapDB, Edit } from '../CommenJSON'
import { success, error } from '../Message'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type, id } = ctx.data
        if (!type || type === "undefined") { throw "type and id are required !!!"; return }
        const DBType = MapDB[type]
        if (id && id !== 'undefined') {
            const editData = await DBModel[DBType].findOne({
                where: { id },
                attributes: {
                    exclude: ['createdAt', 'password', 'updatedAt', 'type', 'operator', 'auth_btn', 'auth_menu']
                }
            })
            ctx.body = success({ head: Edit[type], data: editData || [] })
        } else {
            ctx.body = success({ head: Edit[type], data: [] })
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

router.put('/', async (ctx: any) => {
    try {
        const { type, id } = ctx.data
        if (!type || type === "undefined") { throw "type is required !!!" }
        const DBType = MapDB[type]
        const option: Array<any> = Edit[type]
        const postData: any = {}
        option.forEach((oim) => {
            postData[oim.name] = ctx.data[oim.name]
        })
        if (id && id !== 'undefined') {
            const updateData = await DBModel[DBType].update(postData, { where: { id } })
            ctx.body = success("保存成功")
        } else {
            postData.password = '123456'
            postData.type = '2'
            postData.auth_btn = 'user_info'
            postData.auth_menu = 'user_info'
            postData.operator = ctx.operator.id
            const [userData, isCreate] = await DBModel[DBType].findCreateFind({
                where: { id_number: postData.id_number },
                defaults: postData
            })
            ctx.body = isCreate ? success(userData) : error(`${postData.id_number}已存在`)
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

router.delete('/', async (ctx: any) => {
    try {
        const { id, type } = ctx.data
        if (!id || !type) { throw "id and type are required !!!" }
        const DBType = MapDB[type]
        const deleteInfo = await DBModel[DBType].destroy({ where: { id } })
        ctx.body = deleteInfo ? success({ id: Number(id) }) : error("数据不存在...")
    } catch (error) {
        ctx.body = error(error)
    }
})

export default router