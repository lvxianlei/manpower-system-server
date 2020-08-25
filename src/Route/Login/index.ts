import * as Router from 'koa-router'
import { User } from '../../DBModel'
import { error, success } from '../../Message'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const data = await User.create({
            ...ctx.data,
        })
        ctx.body = success(data)
    } catch (err) {
        console.log(err)
        ctx.body = 'error'
    }
})

export default router