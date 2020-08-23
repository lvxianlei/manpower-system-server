import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser'
import * as cors from 'koa2-cors'
import router from './Route'
import { nextTick } from 'process';
const app = new Koa();

app.use(bodyParser())

app.use(cors())

app.use(async (ctx: any, next) => {
    ctx.data = ctx.request.body
    ctx.response.heades = 'text/json; charset=utf-8'
    next()
})

app.use(router.routes())

app.use(router.allowedMethods());

app.listen(8000)