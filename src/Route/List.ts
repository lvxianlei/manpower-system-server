import * as fs from 'fs'
import * as moment from 'moment'
import { resolve } from 'path'
import * as Router from 'koa-router'
import { readFile, utils } from 'xlsx'
import { literal } from 'sequelize'
import DBModel, { User, Attendance, PayCard, Achievements } from '../DBModel'
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
        switch (type) {
            case 'department_setting':
                if (ctx.operator.type === 1) {
                    const departmentData = fs.readFileSync(resolve(__dirname, '../CommenJSON/Department.json')).toString()
                    ctx.body = success({ data: JSON.parse(departmentData) })
                } else {
                    ctx.body = error('暂无此项权限', 0)
                }
                return;
            case 'attendance':
                const attendanceData = await Attendance.findAll({
                    attributes: [
                        'User.username', 'User.division', 'User.department', 'User.position', 'user_id',
                        [literal(`SUM(CASE attendance WHEN 1 THEN 1 ELSE 0 END)`), 'attendance'],
                        [literal(`SUM(CASE attendance WHEN 2 THEN 1 ELSE 0 END)`), 'business_leave'],
                        [literal(`SUM(CASE attendance WHEN 3 THEN 1 ELSE 0 END)`), 'disease_leave'],
                        [literal(`SUM(CASE attendance WHEN 4 THEN 1 ELSE 0 END)`), 'public_holidays'],
                        [literal(`SUM(CASE attendance WHEN 5 THEN 1 ELSE 0 END)`), 'legal_holiday'],
                        [literal(`SUM(CASE attendance WHEN 6 THEN 1 ELSE 0 END)`), 'work_home']
                    ],
                    include: [{ model: User, attributes: [] }],
                    group: ['User.username', 'User.division', 'User.department', 'User.position', 'user_id'],
                    raw: true
                })
                if (ctx.operator.type === 1) {
                    const postData = attendanceData.map((user: any) => ({ ...user, pageButton: fromAuthToBtn(type) }))
                    ctx.body = success({ head: List[type], data: postData })
                } else {
                    ctx.body = success({ head: List[type], data: attendanceData })
                }
                return;
            default:
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
                return;
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
        const fileType = file.name.split('.')[1]
        const xlsxType = ["xlsx", "xls"]
        if (xlsxType.includes(fileType)) {
            const workFile = await readFile(file.path, { type: 'buffer' })
            const first_sheet_name = workFile.SheetNames[0];
            const worksheet = workFile.Sheets[first_sheet_name]
            const sheetJson = utils.sheet_to_json(worksheet)
            const formatJson = formatXLXS(sheetJson, type)
            switch (type) {
                case 'user_info':
                    const bulkCreateOrUpdate = await sequelize.transaction(function (t1) {
                        return sequelize.transaction((t2) => {
                            const xlxsActions = formatJson.map((action: any) => User.findCreateFind({
                                where: { username: action.username, id_number: action.id_number },
                                defaults: { ...action, operator: ctx.operator.id }
                            }))
                            return Promise.all(xlxsActions)
                        })
                    })
                    ctx.body = success(bulkCreateOrUpdate.map((data: any) => ({ ...data[0].toJSON(), pageButton: fromAuthToBtn(type) })))
                    return
                case 'attendance':
                    const xlxsAction_ids = formatJson.map((action: any) => User.findOne({
                        where: {
                            username: action.username,
                            division: action.division,
                            department: action.department,
                            position: action.position
                        },
                        attributes: ['id']
                    }))
                    const xlsx_ids: Array<any> = await Promise.all(xlxsAction_ids)
                    await sequelize.transaction(function (t1) {
                        return sequelize.transaction((t2) => {
                            const xlxsActions = formatJson.map((action: any, index: number) => {
                                return Attendance.findCreateFind({
                                    where: { record_date: moment(action.date).format('YYYY-MM-DD') },
                                    defaults: {
                                        attendance: action.status,
                                        user_id: xlsx_ids[index].toJSON().id,
                                        record_date: moment(action.date).format('YYYY-MM-DD'),
                                        operator: ctx.operator.id
                                    },
                                    include: [User]
                                })
                            })
                            return Promise.all(xlxsActions)
                        })
                    })
                    const attendance_post = await Attendance.findAll({
                        attributes: [
                            'User.username', 'User.division', 'User.department', 'User.position', 'user_id',
                            [literal(`SUM(CASE attendance WHEN 1 THEN 1 ELSE 0 END)`), 'attendance'],
                            [literal(`SUM(CASE attendance WHEN 2 THEN 1 ELSE 0 END)`), 'business_leave'],
                            [literal(`SUM(CASE attendance WHEN 3 THEN 1 ELSE 0 END)`), 'disease_leave'],
                            [literal(`SUM(CASE attendance WHEN 4 THEN 1 ELSE 0 END)`), 'public_holidays'],
                            [literal(`SUM(CASE attendance WHEN 5 THEN 1 ELSE 0 END)`), 'legal_holiday'],
                            [literal(`SUM(CASE attendance WHEN 6 THEN 1 ELSE 0 END)`), 'work_home']
                        ],
                        include: [{ model: User, attributes: [] }],
                        group: ['User.username', 'User.division', 'User.department', 'User.position', 'user_id'],
                        raw: true
                    })
                    ctx.body = success(attendance_post.map((data: any) => ({
                        ...data, pageButton: fromAuthToBtn(type)
                    })))
                    return
                case 'achievements':
                    const achievements_bulkCreateOrUpdate = await sequelize.transaction(function (t1) {
                        return sequelize.transaction((t2) => {
                            const xlxsActions = formatJson.map((action: any) => User.findCreateFind({
                                where: {
                                    username: action.username,
                                    division: action.division,
                                    department: action.department,
                                    position: action.position
                                },
                                include: [User],
                                defaults: { ...action, operator: ctx.operator.id }
                            }))
                            return Promise.all(xlxsActions)
                        })
                    })
                    ctx.body = success(achievements_bulkCreateOrUpdate.map((data: any) => ({
                        ...data[0].toJSON(),
                        pageButton: fromAuthToBtn(type)
                    })))
                    return
                case 'pay_card':
                    const pay_card_bulkCreateOrUpdate = await sequelize.transaction(function (t1) {
                        return sequelize.transaction((t2) => {
                            const xlxsActions = formatJson.map((action: any) => User.findCreateFind({
                                where: {
                                    username: action.username,
                                    division: action.division,
                                    department: action.department,
                                    position: action.position
                                },
                                include: [User],
                                defaults: { ...action, operator: ctx.operator.id }
                            }))
                            return Promise.all(xlxsActions)
                        })
                    })
                    ctx.body = success(pay_card_bulkCreateOrUpdate.map((data: any) => ({
                        ...data[0].toJSON(),
                        pageButton: fromAuthToBtn(type)
                    })))
                    return
                default:
                    ctx.body = error('type does not exist...')
            }
        } else {
            ctx.body = error(`只支持上传['xlsx','xls']文件`)
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router