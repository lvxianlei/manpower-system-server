const config: any = {
    'development': {
        dialect: 'mysql',
        database: 'manpower',
        username: 'root',
        password: '123456',
        host: 'localhost',
        port: 3306
    },
    'production': {
        dialect: 'mysql',
        database: 'manpower',
        username: 'root',
        password: 'root',
        host: 'localhost',
        port: 3306
    },
    'test': {
        dialect: 'mysql',
        database: 'manpower',
        username: 'root',
        password: '123456',
        host: 'localhost',
        port: 3306
    }
}
export default config[process.env.NODE_ENV]