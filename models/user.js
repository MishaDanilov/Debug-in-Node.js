module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    })
}