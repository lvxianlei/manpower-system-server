import { Sequelize, DataTypes } from 'sequelize'
import * as uuid from 'node-uuid'
import { createNamespace } from 'cls-hooked'
import config from './config'
const { dialect, database, username, password, host, port } = config
const namespace = createNamespace('manpower-system-server-background')
export const generateId = () => uuid.v4()
Sequelize.useCLS(namespace)
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
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    };
    attrs.createdAt = {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: () => new Date()
    };
    attrs.updatedAt = {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: () => new Date()
    }
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false
    });
}