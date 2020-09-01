import * as Router from 'koa-router'
import DBModel from '../../DBModel'
import { List, MapDB } from '../../CommenJSON'
import { success, error } from '../../Message'
import { formatExcel } from '../../Util'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type } = ctx.data
        const DBType = MapDB[type]
        const userData = await DBModel[DBType].findAll({
            attributes: {
                exclude: ['createdAt', 'password', 'updatedAt', 'type']
            },
            order: [['createdAt', 'DESC']]
        })
        ctx.body = success({ head: List[type], data: userData })
    } catch (err) {
        ctx.body = error(err)
    }
})

router.post('/upload', async (ctx: any) => {
    const data = await formatExcel(ctx.request.files)
    ctx.body = success(data)
})

export default router