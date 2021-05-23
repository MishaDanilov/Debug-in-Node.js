module.exports = function(sequelize, DataTypes) {//<Function statements require a function name>.<поместил функцию в объект exports так как функция должна экспортироваться>. Исправлена строка <1> в файле <models\game.js>
    return sequelize.define('game', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },

        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        studio: {
            type: DataTypes.STRING,
            allowNull: false,            
        },

        esrb_rating: {
            type: DataTypes.CHAR(5),
            allowNull: false,
        },

        user_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },

        have_played : {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    })
}