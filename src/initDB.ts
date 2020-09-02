import { sequelize } from './ConfigDB'
import { SystemUser } from './DBModel'
(async () => {
    try {
        const consoleInfo = await sequelize.sync()
        const adminInfo = await SystemUser.create({
            username: 'admin',
            password: '123456',
            phone: '13211221122',
            email: 'qweqweqwe',
            idNumber: '1321321',
            type: '1'
        })
    } catch (err) {
        throw new Error(err)
    }
})()

