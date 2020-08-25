"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const Login_1 = require("./Login");
const router = new Router();
router.use('/login', Login_1.default.routes(), router.allowedMethods());
exports.default = router;
//# sourceMappingURL=index.js.map