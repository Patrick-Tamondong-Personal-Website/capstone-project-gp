import { Sequelize, DataType } from "sequelize-typescript";

const getUserModel = (sequelize : Sequelize, ) => {
    const User = sequelize.define('user', {
        username: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
            notEmpty: true,
            },
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        name: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        address: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        phone: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });
    return User;
};

export default getUserModel;