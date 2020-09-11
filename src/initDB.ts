import DBModel, { SystemUser } from './DBModel'
const initDB = async () => {
    try {
        Object.keys(DBModel).forEach((item: string) => {
            DBModel[item].sync({ force: true })
        })
    } catch (err) {
        throw new Error(err)
    }
}

const init = async () => {
    const init = await initDB()
}

init()