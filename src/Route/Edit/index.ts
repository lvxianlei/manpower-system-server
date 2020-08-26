import * as Router from 'koa-router'
import { User } from '../../DBModel'
import { success } from '../../Message'
const router = new Router()
const SECRET = 'shared-secret'
router.post('/', async (ctx: any) => {
   
})

export default router