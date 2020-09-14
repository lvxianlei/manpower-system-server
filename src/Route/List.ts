import * as Router from 'koa-router'
import { readFile, utils } from 'xlsx'
import DBModel from '../DBModel'
import { List, MapDB } from '../CommenJSON'
import { success, error } from '../Message'
import { fromAuthToBtn } from '../Util'
import { sequelize } from '../ConfigDB'
const router = new Router()
router.post('/', async (ctx: any) => {
    try {
        const { type } = ctx.data
        const DBType = type === "pay_card" ? MapDB.user_info : MapDB[type]
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
            const head = List[type === 'pay_card' ? 'user_info' : type]
            const workFile = await readFile(file.path, { type: 'buffer' })
            const first_sheet_name = workFile.SheetNames[0];
            const worksheet = workFile.Sheets[first_sheet_name]
            const sheetJson = utils.sheet_to_json(worksheet)
            const formatJson = sheetJson.map((json: any) => {
                const formatItem: any = {}
                Object.keys(json).forEach((jsonKey: string) => {
                    const headData: any = head.filter((headItem: any) => headItem.label === jsonKey)[0]
                    if (headData) {
                        formatItem[headData.name] = json[jsonKey]
                        formatItem.status = 1
                        formatItem.operator = ctx.operator.id
                    }
                })
                return formatItem
            })
            const bulkCreateOrUpdate = await sequelize.transaction(function (t1) {
                return sequelize.transaction((t2) => {
                    const xlxsActions = formatJson.map((action: any) => DBModel[DBType].findCreateFind({
                        where: { username: action.username, id_number: action.id_number },
                        defaults: action
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