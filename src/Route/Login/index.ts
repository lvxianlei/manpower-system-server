import * as Router from 'koa-router'
const router = new Router()
router.post('/', async (ctx: any) => {
    

    ctx.body = {
        token: 'abc',
        refce_token: 'refce_token'
    }
})

router.get('/main', async (ctx: any) => {
    ctx.body = '-------login/main--------'
})

export default router