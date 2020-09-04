import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'

export default definModel('system_user', {
    username: DataTypes.STRING(100),
    password: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    idNumber: DataTypes.STRING(100),
    phone: DataTypes.STRING(100),
    type: DataTypes.INTEGER(),
    auth_menu: DataTypes.STRING(255),
    auth_btn: DataTypes.STRING(255)
})