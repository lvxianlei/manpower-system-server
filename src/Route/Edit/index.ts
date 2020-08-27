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
export default router