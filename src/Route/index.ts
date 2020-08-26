import * as Router from 'koa-router'
import Login from './Login'
import Edit from './Edit'
import User from './User'
const router = new Router();

router.use('/login', Login.routes(), router.allowedMethods())

router.use('/edit', Edit.routes(), router.allowedMethods())

router.use('/user', User.routes(), router.allowedMethods())

export default router