import * as fs from 'fs'
import { resolve } from 'path'
import * as Router from 'koa-router'
import { readFile, utils } from 'xlsx'
import DBModel from '../DBModel'
import { List, MapDB } from '../CommenJSON'
import { success, error } from '../Message'
import { fromAuthToBtn, formatXLXS } from '../Util'
import { sequelize } from '../ConfigDB'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type } = ctx.data
        if (!type) throw "type does not exist... ";
        const DBType = MapDB[type]
        if (DBType) {
            const userData = await DBModel[DBType].findAll({
                attributes: {
                    exclude: ['createdAt', 'password', 'updatedAt', 'type', 'operator', 'auth_btn', 'auth_menu']
                },
                order: [['createdAt', 'DESC']]
            })
            if (ctx.operator.type === 1) {
                const postData = userData.map((user: any) => ({ ...user.toJSON(), pageButton: fromAuthToBtn(type) }))
                ctx.body = success({ head: List[type], data: postData })
            } else {
                ctx.body = success({ head: List[type], data: userData })
            }
        } else if (type === 'department_setting') {
            const departmentData = fs.readFileSync(resolve(__dirname, '../CommenJSON/Department.json')).toString()
            ctx.body = success({ data: JSON.parse(departmentData) })
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

router.post('/upload', async (ctx: any) => {
    try {
        const { type } = ctx.data
        if (!type || type === "undefined") throw "type is required..."
        const file = ctx.request.files.file
        const DBType = type === "pay_card" ? MapDB.user_info : MapDB[type]
        const fileType = file.name.split('.')[1]
        const xlsxType = ["xlsx", "xls"]
        if (xlsxType.includes(fileType)) {
            const workFile = await readFile(file.path, { type: 'buffer' })
            const first_sheet_name = workFile.SheetNames[0];
            const worksheet = workFile.Sheets[first_sheet_name]
            const sheetJson = utils.sheet_to_json(worksheet)
            const formatJson = formatXLXS(sheetJson, type)
            console.log(formatJson, '----------')
            const bulkCreateOrUpdate = await sequelize.transaction(function (t1) {
                return sequelize.transaction((t2) => {
                    const xlxsActions = formatJson.map((action: any) => DBModel[DBType].findCreateFind({
                        where: { username: action.username, id_number: action.id_number },
                        defaults: { ...action, operator: ctx.operator.id }
                    }, { transaction: t1 }))
                    return Promise.all(xlxsActions)
                })
            })
            ctx.body = success(bulkCreateOrUpdate.map((data: any) => ({ ...data[0].toJSON(), pageButton: fromAuthToBtn(type) })))
        } else {
            ctx.body = error(`只支持上传['xlsx','xls']文件`)
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router