import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'
import User from './User'
//  考勤
const Attendance = definModel('attendance', {
    operator: DataTypes.STRING(100),
    record_date: DataTypes.DATE()
})

User.hasOne(Attendance, {
    foreignKey: {
        name: 'id'
    }
})
Attendance.belongsTo(User, {
    foreignKey: {
        name: 'user_id'
    }
})
export default Attendance