import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'
import User from './User'
//  考勤
//     record_date: DataTypes.DATE(),
//     attendance: DataTypes.STRING(),
//     business_leave: DataTypes.STRING(),
//     disease_leave: DataTypes.STRING(),
//     public_holidays: DataTypes.STRING(),
//     legal_holiday: DataTypes.STRING(),
//     work_home: DataTypes.STRING(),
//     remark: DataTypes.STRING()

const Attendance = definModel('attendance', {
    attendance: DataTypes.STRING(),
    record_date: DataTypes.DATE(),
    operator: DataTypes.STRING(100),
})

User.hasMany(Attendance, {
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