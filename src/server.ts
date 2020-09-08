import * as Koa from 'koa';
import * as koaBody from 'koa-body'
import * as JWT from 'koa-jwt'
import * as jsonwebtoken from 'jsonwebtoken'
import * as cors from 'koa2-cors' //跨域
import { error as errorCode } from './Message'
import { SystemUser } from './DBModel'
import router from './Route'
const SECRET = 'manpower-admin'
const app = new Koa();
app.use(cors())

app.use(koaBody({
    multipart: true,
    parsedMethods: ['POST', 'PUT', 'DELETE', 'PATCH'],
    formidable: {
        maxFileSize: 200 * 1024 * 1024
    }
}))

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        const warningInfo = ctx.request.header.authorization ? "accesse_token已过期" : "请携带accesse_token"
        if (401 === error.status) {
            ctx.status = 200;
            ctx.body = errorCode(warningInfo, -1);
        } else {
            throw error;
        }
    }
})

app.use(JWT({ secret: SECRET }).unless({ path: [/\/login/] }))

app.use(async (ctx: any, next) => {
    if (ctx.path !== '/login') {
        try {
            const operator: any = jsonwebtoken.decode(ctx.header.authorization.split(' ')[1])
            const user = await SystemUser.findOne({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                where: {
                    id: operator.id
                }
            })
            ctx.operator = user.toJSON()
        } catch (error) {
            console.log(error)
        }
    }
    ctx.data = ctx.request.body
    ctx.response.heades = 'application/json; charset=utf-8'
    await next()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8000)