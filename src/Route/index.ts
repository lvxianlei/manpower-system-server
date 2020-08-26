import * as Router from 'koa-router'
import Login from './Login'
const router = new Router();

router.use('/login', Login.routes(), router.allowedMethods())

export default router