import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'

export default definModel('achievements', {
    username: DataTypes.STRING(100),
    password: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    id_number: DataTypes.STRING(100),
    phone: DataTypes.STRING(100),
    type: DataTypes.INTEGER(),
    operator: DataTypes.STRING(100)
})