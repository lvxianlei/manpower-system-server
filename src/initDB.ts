import { User } from './DBModel'

(async () => {
    const consoleInfo = await User.sync({ force: true })
})()

