"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const DBModel_1 = require("../../DBModel");
const Message_1 = require("../../Message");
const router = new Router();
router.post('/', async (ctx) => {
    try {
        const data = await DBModel_1.User.create(Object.assign({}, ctx.data));
        ctx.body = Message_1.success(data);
    }
    catch (err) {
        console.log(err);
        ctx.body = 'error';
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map