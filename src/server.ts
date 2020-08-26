import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser'
import * as JWT from 'koa-jwt'
import * as cors from 'koa2-cors' //跨域
import router from './Route'
const SECRET = 'shared-secret'
const app = new Koa();

app.use(bodyParser())

app.use(cors())

app.use(async (ctx: any, next) => {
    ctx.data = ctx.request.body
    ctx.response.heades = 'text/json; charset=utf-8'
    await next()
})

app.use(router.routes())

app.use(router.allowedMethods())

app.use(async (ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
        } else {
            throw err;
        }
    })
})

app.use(JWT({ secret: SECRET }).unless({
    // 登录接口不需要验证
    path: [/^\/login\//]
}))



app.listen(8000)