import * as Router from 'koa-router'
import DBModel from '../DBModel'
import { MapDB, Edit } from '../CommenJSON'
import { success, error } from '../Message'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type, id } = ctx.data
        if (!type || !id) { throw "type and id are required !!!" }
        const DBType = MapDB[type]
        const editData = await DBModel[DBType].findOne({
            where: { id },
            attributes: {
                exclude: ['createdAt', 'password', 'updatedAt', 'type', 'operator', 'auth_btn', 'auth_menu']
            }
        })
        ctx.body = success({ head: Edit[type], data: editData })
    } catch (err) {
        ctx.body = error(err)
    }
})

router.put('/', async (ctx: any) => {
    try {
        const { type, id } = ctx.data
        if (!type) { throw "type is required !!!" }
        const DBType = MapDB[type]
        const option: Array<any> = Edit[type]
        const postData: any = {}
        option.forEach((oim) => {
            postData[oim.name] = ctx.data[oim.name]
        })
        if (id) {
            const updateData = await DBModel[DBType].update(postData, { where: { id } })
            ctx.body = success("保存成功")
        } else {
            postData.password = '123456'
            postData.type = '2'
            const [userData, isCreate] = await DBModel[DBType].findCreateFind({
                where: { idNumber: postData.idNumber },
                defaults: postData
            })
            ctx.body = isCreate ? success(userData) : error(`${postData.idNumber}已存在`)
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
        ctx.body = success(deleteInfo)
    } catch (error) {
        ctx.body = error(error)
    }
})

export default router