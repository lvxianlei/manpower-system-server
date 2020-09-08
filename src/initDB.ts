import { sequelize } from './ConfigDB'
import SystemUser from './DBModel/SystemUser'
(async () => {
    try {
        sequelize.sync({force: true})
       
        // SystemUser.create({
        //     username: 'admin',
        //     password: '123456',
        //     email: 'aaa',
        //     idNumber: 'testestestest',
        //     phone: '13211551155',
        //     type: 1,
        //     auth_menu: 'all',
        //     auth_btn: 'all'
        // })
    } catch (err) {
        throw new Error(err)
    }
})()

