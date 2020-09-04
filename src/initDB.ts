import { sequelize } from './ConfigDB'
(async () => {
    try {
        const consoleInfo = await sequelize.sync({alter: true})
    } catch (err) {
        throw new Error(err)
    }
})()

