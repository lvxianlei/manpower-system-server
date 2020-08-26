import { User } from './DBModel'

(async () => {
    try {
        const consoleInfo = await User.sync({ force: true })
    } catch (err) {
        throw new Error(err)
    }
})()

