"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.post('/', async (ctx) => {
    console.log(ctx.request.body);
    ctx.response.heades = 'text/json; charset=utf-8';
    ctx.body = {
        token: 'abc',
        refce_token: 'refce_token'
    };
});
router.get('/main', async (ctx) => {
    ctx.body = '-------login/main--------';
});
exports.default = router;
//# sourceMappingURL=index.js.map