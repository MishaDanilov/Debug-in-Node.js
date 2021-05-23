const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, { //параметры беруться из файла .env
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: "5433",
    operatorsAliases: false,
    define: {timestamps: false}
})

sequelize.authenticate()
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.log(`Error: ${err}`))


module.exports = {//<db.js экспортировал только объект класса Sequelize, но не экспортировал сам класс Sequelize>.<добавил в экспорт класс Sequelize>. Исправлена строка <18> в файле <db.js>
    db: sequelize,
    dataTypes: Sequelize
} //<ошибка "db.sync is not a function" в файле app.js>.<экспортировал объект sequelize>. Исправлена строка <18> в файле <db.js>