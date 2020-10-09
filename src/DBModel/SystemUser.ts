import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'
import { validatePhoneCode } from '../Util'
export default definModel('system_user', {
    username: DataTypes.STRING(100),
    password: DataTypes.STRING(100),
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: {
                msg: '请输入正确的邮箱...'
            }
        }
    },
    id_number: {
        type: DataTypes.STRING(100),
        validate: {
            notEmpty: true
        }
    },
    phone: {
        type: DataTypes.STRING(100),
        validate: {
            isEvent: (value: string) => {
                if (!validatePhoneCode(value)) throw new Error('请输入正确的手机号...')
            }
        }
    },
    department: {
        type: DataTypes.STRING(100),
        validate: {
            notEmpty: true
        }
    },
    type: DataTypes.INTEGER(),
    auth_menu: DataTypes.STRING(255),
    auth_btn: DataTypes.STRING(255)
})