import * as Router from 'koa-router'
import { SystemUser } from '../../DBModel'
import * as jsonwebtoken from 'jsonwebtoken'
import { success } from '../../Message'
const router = new Router()
const SECRET = 'manpower-admin'

router.post('/', async (ctx: any) => {
    try {
        const { username, password } = ctx.request.body
        const usernameItem: any = await SystemUser.findOne({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }, where: { username }
        })
        if (usernameItem) {
            if (usernameItem.password === password) {
                const access_token = jsonwebtoken.sign({ username, id: usernameItem.id }, SECRET, { expiresIn: '1h' })
                ctx.body = success({ ...usernameItem.toJSON(), access_token })
            } else {
                ctx.status = 401
            }
        } else {
            ctx.status = 400
        }
    } catch (err) {
        ctx.status = 500
        throw err
    }
})

export default router