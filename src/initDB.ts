import { sequelize } from './ConfigDB'
import DBModel from './DBModel'
(async () => {
    try {
        Object.keys(DBModel).forEach((item: string) => {
            DBModel[item].sync()
        })
    } catch (err) {
        throw new Error(err)
    }
})()

