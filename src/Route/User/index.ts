import * as Router from 'koa-router'
import { User } from '../../DBModel'
import { success } from '../../Message'
const router = new Router()
const SECRET = 'shared-secret'
router.post('/', async (ctx: any) => {
    console.log(ctx.data,ctx.request.body,'------user-------')
    ctx.body = success("aaaaaaaaa")
})

export default router