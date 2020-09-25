import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'
export default definModel('user', {
    division: DataTypes.STRING(100),
    department: DataTypes.STRING(100),
    position: DataTypes.STRING(100),
    username: {
        type: DataTypes.STRING(100),
        validate: {
            notEmpty: true
        }
    },
    rank: DataTypes.STRING(100),
    gender: DataTypes.INTEGER(),
    birth: DataTypes.DATEONLY(),
    descent: DataTypes.STRING(100),
    nation: DataTypes.INTEGER(),
    education: DataTypes.STRING(100),
    graduation_school: DataTypes.STRING(100),
    major: DataTypes.STRING(100),
    political_face: DataTypes.STRING(100),
    marriage: DataTypes.INTEGER(),
    entry_date: DataTypes.DATEONLY(),
    id_card_address: {
        type: DataTypes.STRING(100),
        validate: {
            notEmpty: true
        }
    },
    phone: DataTypes.STRING(100),
    special_phone: DataTypes.STRING(100),
    id_number: {
        type: DataTypes.STRING(100),
        validate: {
            isNumeric: true
        }
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: {
                msg: '请输入正确的邮箱...'
            }
        }
    },
    experience: DataTypes.STRING(100),
    remarks: DataTypes.STRING(100),
    age: DataTypes.INTEGER(),
    status: DataTypes.INTEGER(),
    operator: DataTypes.STRING(100),
})