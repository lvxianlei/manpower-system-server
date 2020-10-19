import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import * as Router from 'koa-router'
import DBModel from '../DBModel'
import { MapDB, List } from '../CommenJSON'
import { success, error } from '../Message'
const router = new Router()

// 编辑
router.post('/', async (ctx: any) => {
    const { name, label } = ctx.data
    if (!name || !label) throw "'name' or 'label' is required..."
    try {
        const departmentData = JSON.parse(readFileSync(resolve(__dirname, '../../public/Department.json')).toString())
        const isNameExist = departmentData.filter((item: any) => item.name === name).length > 0
        const isLabelExist = departmentData.filter((item: any) => item.label === label).length > 0
        if (isNameExist) {
            ctx.body = error(name + '已存在')
            return
        }
        if (isLabelExist) {
            ctx.body = error(label + '已存在')
            return
        }
        if (!isNameExist && !isLabelExist) {
            departmentData.push({ name, label })
            writeFileSync(resolve(__dirname, '../../public/Department.json'), JSON.stringify(departmentData))
            ctx.body = success('成功添加...')
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

// 新增
router.put('/', async (ctx: any) => {

})

// 删除
router.delete('/', async (ctx: any) => {
    const { name, label } = ctx.data
    if (!name || !label) throw "'name' or 'label' is required..."
    try {
        const departmentData = JSON.parse(readFileSync(resolve(__dirname, '../../public/Department.json')).toString())
        const isNameExist = departmentData.filter((item: any) => item.name === name).length > 0
        const isLabelExist = departmentData.filter((item: any) => item.label === label).length > 0
        if (!isNameExist) {
            ctx.body = error(name + '不存在')
            return
        }
        if (!isLabelExist) {
            ctx.body = error(label + '不存在')
            return
        }
        if (isNameExist && isLabelExist) {
            const deleteSorce = departmentData.filter((item: any) => item.name !== name && item.label !== label)
            writeFileSync(resolve(__dirname, '../../public/Department.json'), JSON.stringify(deleteSorce))
            ctx.body = success('成功删除...')
        }
    } catch (err) {
        ctx.body = error(err)
    }
})

export default router