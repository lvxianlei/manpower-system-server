import * as Router from 'koa-router'
import DBModel from '../../DBModel'
import { MapDB, Edit } from '../../CommenJSON'
import { success, error } from '../../Message'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type } = ctx.data
        ctx.body = success(Edit[type])
    } catch (err) {
        ctx.body = error(err)
    }
})

router.put('/', async (ctx: any) => {
    try {
        const { type } = ctx.data
        const DBType = MapDB[type]
        const option: Array<any> = Edit[type]
        const postData: any = {}
        postData.password = '123456'
        postData.type = '2'
        option.forEach((oim) => {
            postData[oim.name] = ctx.data[oim.name]
        })
        const userData = await DBModel[DBType].create(postData)
        ctx.body = success(userData)
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router