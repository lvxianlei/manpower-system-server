"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const Route_1 = require("./Route");
const app = new Koa();
app.use(bodyParser());
app.use(cors());
app.use(async (ctx, next) => {
    ctx.data = ctx.request.body;
    ctx.response.heades = 'text/json; charset=utf-8';
    next();
});
app.use(Route_1.default.routes());
app.use(Route_1.default.allowedMethods());
app.listen(8000);
//# sourceMappingURL=server.js.map