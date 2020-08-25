import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'

export default definModel('user', {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: DataTypes.STRING(100),
    gender: DataTypes.INTEGER,
    idNumber: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: DataTypes.STRING(100),
    authority: DataTypes.NUMBER
})