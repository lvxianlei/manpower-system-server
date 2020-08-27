import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser'
import * as JWT from 'koa-jwt'
import * as cors from 'koa2-cors' //跨域
import { error as errorCode } from './Message'
import router from './Route'
const SECRET = 'manpower-admin'
const app = new Koa();
app.use(cors())

app.use(bodyParser())
// passthrough: true

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        const warningInfo = ctx.request.header.authorization ? "accesse_token已过期" : "请携带accesse_token"
        if (401 === error.status) {
            ctx.status = 200;
            ctx.body = errorCode(warningInfo);
        } else {
            throw error;
        }
    }
})

app.use(JWT({ secret: SECRET }).unless({ path: [/\/login/] }))

app.use(async (ctx: any, next) => {
    ctx.data = ctx.request.body
    ctx.response.heades = 'application/json; charset=utf-8'
    await next()
})

app.use(router.routes())

app.use(router.allowedMethods())

app.listen(8000)