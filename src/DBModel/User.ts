import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'

export default definModel('user', {

    username: DataTypes.STRING(100),
    id_number: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    age: DataTypes.INTEGER(),
    division: DataTypes.STRING(100),
    department: DataTypes.STRING(100),
    position: DataTypes.STRING(100),
    rank: DataTypes.STRING(100),
    gender: DataTypes.STRING(100),
    birth: DataTypes.STRING(100),
    descent: DataTypes.STRING(100),
    nation: DataTypes.STRING(100),
    education: DataTypes.STRING(100),
    major: DataTypes.STRING(100),
    political_face: DataTypes.STRING(100),
    marriage: DataTypes.INTEGER(),
    entry_date: DataTypes.TIME,
    id_card_address: DataTypes.STRING(100),
    phone: DataTypes.STRING(100),
    special_phone: DataTypes.STRING(100),
    remarks: DataTypes.STRING(100),
    status: DataTypes.INTEGER(),
    operator: DataTypes.STRING(100)
})