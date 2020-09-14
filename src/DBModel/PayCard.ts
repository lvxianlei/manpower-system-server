import { DataTypes } from 'sequelize'
import { definModel } from '../ConfigDB'
import User from './User'
//  银行卡信息
const PayCard = definModel('pay_card', {
    operator: DataTypes.STRING(100),
    pay_card_hz: DataTypes.STRING(50),
    pay_card_zg: DataTypes.STRING(50),
    pay_card_address: DataTypes.STRING(100),
})

User.hasOne(PayCard, {
    foreignKey: {
        name: 'id'
    }
})

PayCard.belongsTo(User, {
    foreignKey: {
        name: 'user_id'
    }
})
export default PayCard