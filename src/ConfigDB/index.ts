import { Sequelize, DataTypes } from 'sequelize'
import * as uuid from 'node-uuid'
import config from './config'
const { dialect, database, username, password, host, port } = config

export const generateId = () => uuid.v4()

export const sequelize = new Sequelize(database, username, password, {
    dialect,
    host,
    port: port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})
const ID_TYPE = DataTypes.STRING(50)
export const definModel = (name: string, attributes: any) => {
    const attrs: any = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    attrs.id = {
        type: ID_TYPE,
        primaryKey: true
    };
    attrs.createdAt = {
        type: DataTypes.BIGINT,
        allowNull: false
    };
    attrs.updatedAt = {
        type: DataTypes.BIGINT,
        allowNull: false
    }
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj: any) {
                let now = Date.now();
                if (obj.isNewRecord) {
                    if (!obj.id) {
                        obj.id = generateId()
                    }
                    obj.createdAt = now
                    obj.updatedAt = now
                } else {
                    obj.updatedAt = Date.now();
                }
            }
        }
    });
}