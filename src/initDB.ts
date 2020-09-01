import { User } from './DBModel'
import { Achievements } from './DBModel'
import { SystemUser } from './DBModel'
import { Attendance } from './DBModel'
(async () => {
    try {
        const consoleInfo = await User.sync({ force: true })
        const achievements = await Achievements.sync({ force: true })
        const systemUser = await SystemUser.sync({ force: true })
        const attendance = await Attendance.sync({ force: true })
    } catch (err) {
        throw new Error(err)
    }
})()

