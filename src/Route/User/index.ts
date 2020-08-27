import * as Router from 'koa-router'
import { User } from '../../DBModel'
import { User as UserHead } from '../../CommenJSON'
import { success, error } from '../../Message'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const userData = await User.findAll({
            attributes: {
                exclude: ['createdAt', 'password', 'updatedAt', 'type']
            }
        })
        ctx.body = success({ head: UserHead, data: userData })
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router