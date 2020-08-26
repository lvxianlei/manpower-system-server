import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser'
import * as JWT from 'koa-jwt'
import * as cors from 'koa2-cors' //跨域
import router from './Route'
const SECRET = 'manpower-admin'
const app = new Koa();

app.use(bodyParser())

app.use(cors())

app.use(router.routes())

app.use(router.allowedMethods())

app.use(JWT({ secret: SECRET }).unless({
    // 登录接口不需要验证
    path: [/^\/login\//]
}))

app.use(async (ctx, next) => {
    console.log(ctx, '-------jwt---')
    await next()
})

app.use(async (ctx: any, next) => {
    console.log(ctx, '-------body---')
    ctx.data = ctx.request.body
    ctx.response.heades = 'text/json; charset=utf-8'
    await next()
})




app.listen(8000)