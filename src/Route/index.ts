import * as Router from 'koa-router'
import * as JWT from 'koa-jwt'
import * as jsonwebtoken from 'jsonwebtoken'
import Login from './Login'
const router = new Router();

router.use('/login', Login.routes(), router.allowedMethods())

export default router