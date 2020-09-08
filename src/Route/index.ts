import * as Router from 'koa-router'
import Login from './Login'
import Menu from './Menu'
import Edit from './Edit'
import List from './List'
const router = new Router();

router.use('/login', Login.routes(), router.allowedMethods())

router.use('/menu', Menu.routes(), router.allowedMethods())

router.use('/edit', Edit.routes(), router.allowedMethods())

router.use('/list', List.routes(), router.allowedMethods())

export default router