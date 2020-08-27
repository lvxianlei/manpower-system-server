import * as Router from 'koa-router'
import DBModel from '../../DBModel'
import { List, MapDB } from '../../CommenJSON'
import { success, error } from '../../Message'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type } = ctx.data
        const DBType = MapDB[type]
        const userData = await DBModel[DBType].findAll({
            attributes: {
                exclude: ['createdAt', 'password', 'updatedAt', 'type']
            }
        })
        ctx.body = success({ head: List[type], data: userData })
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router