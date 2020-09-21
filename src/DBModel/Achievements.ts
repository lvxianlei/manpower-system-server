import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'
import User from './User'
// 绩效
const Achievements = definModel('achievements', {
    username: DataTypes.STRING(100),
    password: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    id_number: DataTypes.STRING(100),
    phone: DataTypes.STRING(100),
    type: DataTypes.INTEGER(),
    operator: DataTypes.STRING(100)
})

User.hasMany(Achievements, {
    foreignKey: {
        name: 'id'
    }
})
Achievements.belongsTo(User, {
    foreignKey: {
        name: 'user_id'
    }
})

export default Achievements