import * as Router from 'koa-router'
import DBModel from '../DBModel'
import { List, MapDB } from '../CommenJSON'
import { success, error } from '../Message'
import { formatExcel, fromAuthToBtn } from '../Util'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type } = ctx.data
        const { auth_btn, auth_menu } = ctx.operator
        const DBType = MapDB[type]
        const userData = await DBModel[DBType].findAll({
            attributes: {
                exclude: ['createdAt', 'password', 'updatedAt', 'type', 'operator', 'auth_btn', 'auth_menu']
            },
            order: [['createdAt', 'DESC']]
        })

        if (ctx.operator.type === 1) {
            const postData = userData.map((user: any) => ({ ...user.toJSON(), pageButton: fromAuthToBtn(type) }))
            ctx.body = success({ head: List[type], data: postData })
        } else {
            ctx.body = success({ head: List[type], data: userData })
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

router.post('/upload', async (ctx: any) => {
    console.log('--------------')
    const data = await formatExcel(ctx.request.files)
    ctx.body = success(data)
})

export default router