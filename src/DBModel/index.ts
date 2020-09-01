import User from './User'
import Achievements from './Achievements'
import SystemUser from './SystemUser'
import Attendance from './Attendance'
export { default as Achievements } from './Achievements'
export { default as SystemUser } from './SystemUser'
export { default as Attendance } from './Attendance'
export { default as User } from './User'
const DBModel: any = {
    User,
    Achievements,
    SystemUser,
    Attendance
}

export default DBModel